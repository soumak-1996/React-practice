import { useEffect,useState } from "react";
import { DESKTOP_WEB_LISTING, RESTAURANT_API } from "./constants";
const useRestaurantList = () => {
    const [listResturant,setlistResturant] = useState([]);
    const [filteredResturant,setfilteredResturant] = useState(listResturant);
    const geolocationAPI = navigator.geolocation;
    const[lat,setLat] = useState(null);
    const[long,setLong] = useState(null);
    const getUserCoordinates = () => {
        if (!geolocationAPI) {
          setError('Geolocation API is not available in your browser!')
        } else {
          geolocationAPI.getCurrentPosition((position) => {
            const { coords } = position;
            setLat(coords.latitude);
            setLong(coords.longitude);
          }, (error) => {
            setError('Something went wrong getting your position!')
          })
        }
    }
    useEffect(()=> {
        getUserCoordinates();
        if(lat !== null && long!== null)
            fetchData();
    },[lat,long]);
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API + lat + "&lng=" + long + "&" + DESKTOP_WEB_LISTING);
        const json = await data.json();
        // optional chaining
        setlistResturant(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return {listResturant,filteredResturant};
}
export default useRestaurantList;