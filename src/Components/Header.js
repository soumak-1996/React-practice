import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    // subscribing to cart items using selector
    const cartItems = useSelector((store) => store.cart.items);
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
                    <li className="px-2 mt-4 text-gray-950 dark:text-white hover:scale-125"> <Link to="/" className="font-sans"> Home</Link></li>
                    <li className="px-2 mt-4 text-gray-950 dark:text-white hover:scale-125"> <Link to="/about">About Us</Link></li>
                    <li className="px-2 mt-4 text-gray-950 dark:text-white hover:scale-125"> <Link to="/contact">Contact </Link></li>
                    <li className="px-2 mt-4 text-gray-950 dark:text-white hover:scale-125"> <Link to="/grocery">Grocery </Link></li>
                    <li className="px-2  text-gray-950 dark:text-white hover:scale-125"> 
                        <Link to="/cart">
                        <div className="flex justify-center items-center">
                        <div className="relative py-2">
                            <div className="t-0 absolute left-3">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-orange-500 p-3 text-xs text-white">{cartItems.length}</p>
                            </div>  
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>   
        </div>
    )
}
export default Header;