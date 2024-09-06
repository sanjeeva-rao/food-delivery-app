import ResCard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    var fetchData = async () => {
        const data = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
        const json = await data.json();
        var restaurentList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRestaurantData(restaurentList)
    }
    
    useEffect(()=>{
        fetchData()  
    }, [])
    const filterTopRests = () => {
        var topRes = restaurantData.filter((res)=>{
            return res.info.avgRating > 4.5
        })
        setRestaurantData(topRes)
    }

    if(!restaurantData.length){
        return <Shimmer/>
    }

    return(
        (
            <div className="body">
                <button onClick={()=>filterTopRests()}>Top Restaurents</button>
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