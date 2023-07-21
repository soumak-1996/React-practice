
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null || resInfo === undefined) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
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