import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={LOGO_URL} 
                alt= "App logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/"> Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact </Link></li>
                    <li> <Link to="/grocery">Grocery </Link></li>
                    <li> Cart</li>
                </ul>
            </div>   
        </div>
    )
}
export default Header;