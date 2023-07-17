import ResturantCard from "./ResturantCard";
import { resList } from "../utils/constants";
import { useEffect, useState } from "react";
export const Body = () => {
    const [ListResturant,setListResturant] = useState(resList);
    const ModifyList = () => {
        setListResturant(ListResturant.filter((res) => res.data.avgRating > 4.0));
    }
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="button-class">
                <button onClick={ModifyList}>
                    Show top rated resturants.
                </button>
            </div>
            <div className="res-container">
            {
               ListResturant.map(resturant => <ResturantCard key = {resturant.data.id} resData = {resturant}/>)
            }    
            </div>
        </div>
    )
}
export default Body;