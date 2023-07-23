import { useState } from "react";
import { IMAGE_URL } from "../utils/constants";
import ItemList from "./ItemList";
const RestaurantCategory = ({data , showItems, showThisIndex,setShowIndex}) => {
    const [show,setShow] = useState(true);
    const handleClick = () => {
        setShow(!show);
        if(show)
            setShowIndex(showThisIndex);
        else
            setShowIndex(null); 
    }
    return (
        <div>
            <div className="w-8/12 shadow-lg p-4 mx-auto my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span className={showItems ? "transition rotate-180" : "transition rotate-0"}>
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                    </span>
                </div>
            {showItems && <ItemList className = "ease-in" categoryItems = {data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategory;