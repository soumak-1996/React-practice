import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMAGE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null || resInfo === undefined) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const res = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(p=> p.card.card.title === "Recommended");
    const {itemCards} = res[0].card.card;
    return (
        <div className="container">
            <div className="pl-4">
                <p className="text-lg font-sans font-bold">{name}</p>
                <p className="text-sm">{cuisines.join(",")}</p>
                <h3>{costForTwoMessage}</h3>
            </div>
            <div>
             {itemCards.map(info => (
                <div key = {info?.card?.info?.id} className="p-2 m-4 w-lg bg-white shadow-lg justify-between flex">
                    <div className="p-4">
                    <p className="font-sans">{info?.card?.info?.name}</p>
                    <p className="font-sans">Rs. {info?.card?.info?.price/100 || info?.card?.info?.defaultPrice /100}</p>
                    <p className="font-light font-sans text-sm">{info?.card?.info?.description}</p>
                    </div>
                    <div className="p-4">
                        <img className="w-[110px] rounded-lg" src={IMAGE_URL + info?.card?.info?.imageId}/>
                    </div>   
                </div>
                ))}
            
            </div>
        </div>
    )
}
export default RestaurantMenu;