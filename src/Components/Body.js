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
        <div className="container-lg">
            <div className="w-96 px-[23px]">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    </div>
                <input type="text" id="default-search" className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-orange-400 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." value={searchText} onChange={
                    (e) => {
                        if(e.target.value === ""){
                            setFilteredList(listResturant);
                        }
                        setsearchText(e.target.value)}}/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={searchResturant}> Search</button>
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