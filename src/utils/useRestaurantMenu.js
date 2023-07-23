import { useEffect ,useState} from "react";
import { MENU_API, RES_ENDING } from "./constants";
const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
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
        if(lat !== null && long !== null)
            fetchMenu();
    },[lat,long]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + lat + "&lng=" + long + "&"  + RES_ENDING + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantMenu;