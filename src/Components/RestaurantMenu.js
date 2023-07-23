import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMAGE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(0);
    if(resInfo === null || resInfo === undefined) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter
    (c=> c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className="container mt-4">
            <div className="mx-auto w-8/12">
                <p className="text-lg font-sans font-bold">{name}</p>
                <p className="text-sm">{cuisines.join(",")}</p>
                <h3>{costForTwoMessage}</h3>
            </div>
            <div>
                {categories.map((category,index) => (<RestaurantCategory 
                key={category?.card?.card.title} 
                data={category?.card.card}
                showItems= {index === showIndex ? true : false}
                showThisIndex = {index}
                setShowIndex = {(updatedIndex) => setShowIndex(updatedIndex)}
                />))}
            </div>
        </div>
    )
}
export default RestaurantMenu;