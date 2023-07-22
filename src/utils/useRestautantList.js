import { useEffect,useState } from "react";
import { RESTAURANT_API } from "./constants";
const useRestaurantList = () => {
    const [listResturant,setlistResturant] = useState([]);
    const [filteredResturant,setfilteredResturant] = useState(listResturant);
    useEffect(()=> {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API)
        const json = await data.json();
        // optional chaining
        setlistResturant(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return {listResturant,filteredResturant};
}
export default useRestaurantList;