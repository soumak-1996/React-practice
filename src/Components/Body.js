import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
export const Body = () => {
    const [listResturant,setlistResturant] = useState([]);
    const [searchText,setsearchText] = useState("");
    const [filteredResturant,setfilteredResturant] = useState([]);
    useEffect(()=> {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6156159&lng=88.4259027&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // optional chaining
        setlistResturant(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
    }
    const topRatedResturants = () => {
        setlistResturant(listResturant.filter((res) => res.data.avgRating > 4.0));
    }
    const searchResturant = () => {
        let filteredList = listResturant.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredResturant(filteredList);
    }
    return listResturant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => 
                    {
                        if(e.target.value === "") setfilteredResturant(listResturant);
                        setsearchText(e.target.value)
                    }}/>
                    <button onClick={searchResturant}>Search</button>
                </div>
                <div className="top-rated">
                    <button onClick={topRatedResturants}>
                        Show top rated resturants.
                    </button>
                </div>
            </div>
            <div className="res-container">
            {
               filteredResturant.map(resturant => <ResturantCard key = {resturant.data.id} resData = {resturant}/>)
            }    
            </div>
        </div>
    )
}
export default Body;