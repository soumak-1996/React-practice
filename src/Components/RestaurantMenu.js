import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(()=> {
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
    }
    if(resInfo === null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
            {itemCards.map(info => <li key = {info?.card?.info?.id}>
                {info?.card?.info?.name  + " - Rs. "} 
                {info?.card?.info?.price/100 || info?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;