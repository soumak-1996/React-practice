import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestautantList";
export const Body = () => {
    const [searchText,setsearchText] = useState("");
    const {listResturant,filteredResturant} = useRestaurantList();
    const [filteredList,setFilteredList] = useState([]);
    useEffect(()=> {
        setFilteredList(filteredResturant);
    },[filteredResturant]);    
    const topRatedResturants = () => {
        setFilteredList(listResturant.filter((res) => res.data.avgRating > 4.0));
    }
    const searchResturant = () => {
        let filteredList = listResturant.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredList(filteredList);
    }
    return listResturant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" className="border-solid py-1 border-black border w-60" value={searchText} onChange={(e) => 
                    {
                        if(e.target.value === "") setFilteredList(listResturant);
                        setsearchText(e.target.value)
                    }}/>
                    <button className="bg-green-400 hover:opacity-80 px-4 py-2 m-4 rounded-lg" onClick={searchResturant}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="bg-red-300 hover:opacity-80 px-4 py-2 m-4 rounded-lg" onClick={topRatedResturants}>
                        Show top rated resturants.
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
               filteredList.map(resturant => <Link  key = {resturant.data.id} className="cursor-pointer" to = {"/restaurants/" + resturant.data.id}><ResturantCard resData = {resturant}/></Link>)
            }    
            </div>
        </div>
    )
}
export default Body;