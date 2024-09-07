import ResCard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [defaultResData, setDefaultResData] = useState([]);
    const [searchResName, setSearchResName] = useState("");

    var fetchData = async () => {
        const data = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
        const json = await data.json();
        var restaurentList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRestaurantData(restaurentList);
        setDefaultResData(restaurentList);
    }
    
    useEffect(()=>{
        fetchData()  
    }, [])

    if(!restaurantData.length){
        return <Shimmer/>
    }

    return(
        (
            <div className="body">
                <div className="search-bar">
                    <input type="text" value={searchResName} placeholder="Search Reastaurant Name" onChange={(e)=>{
                        setSearchResName(e.target.value);  
                    }}/>
                    <button className="search-button" onClick = {()=>{
                        const filterRes = defaultResData.filter((res)=>{
                            return res.info.name.toUpperCase().includes(searchResName.toUpperCase());
                        })
                        setRestaurantData(filterRes);
                    }}>Search</button>
                </div>
                <div className="res-card-body">
                {
                        restaurantData.map((res)=>{
                            return(
                                <ResCard resInfo = {res} key = {res.info.id}></ResCard>
                            )
                        })
                }
                </div>
            </div>
        )
    )
    
}


export default Body