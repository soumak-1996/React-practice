import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
    const user = useContext(UserContext);
    return (
        <div className="justify-between flex  shadow-lg">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo}
                        alt= "App logo" className="w-28 rounded-lg pb-4 pl-4 hover:scale-125"/>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2 text-gray-950 dark:text-white hover:scale-125"> <Link to="/" className="font-sans"> Home</Link></li>
                    <li className="px-2 text-gray-950 dark:text-white hover:scale-125"> <Link to="/about">About Us</Link></li>
                    <li className="px-2 text-gray-950 dark:text-white hover:scale-125"> <Link to="/contact">Contact </Link></li>
                    <li className="px-2 text-gray-950 dark:text-white hover:scale-125"> <Link to="/grocery">Grocery </Link></li>
                    <li className="px-2 text-gray-950 dark:text-white hover:scale-125"> Cart</li>
                </ul>
            </div>   
        </div>
    )
}
export default Header;