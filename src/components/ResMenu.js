import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ResMenu = () => {
    const [recomondedItems, setRecomondedItems] = useState([]);
    const resId = useParams().resId.slice(1);
    
    var fetchResMenu = async ()=> {
        const data = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01420&lng=76.99410&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"));
        const json = await data.json();
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards, "json data");
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.forEach((resCrd)=>{
            if(resCrd.card.card.title === "Recommended"){
                setRecomondedItems(resCrd.card.card.itemCards);
            }
        })   
    }

    
    useEffect(()=>{
        fetchResMenu();
    }, [])

    
    return (
        
        <div>
            <h2 style={{color: "red"}}>Recommended ({recomondedItems.length})</h2>
            {
                recomondedItems.map((item)=>{
                    return (<div key={item.card.info.id}>

                        <h3>{item.card.info.name}</h3>
                        <h3>{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100 } Rs</h3>
                        <p>{item.card.info.ratings.aggregatedRating.rating} Rating</p>
                        <button className="add-button">Add</button>
                        <br></br>
                        <hr></hr>
                    </div>)
                })
                
            }
        </div>

    )
}

export default ResMenu;