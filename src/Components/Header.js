import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={LOGO_URL} 
                alt= "App logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home</li>
                    <li> About Us</li>
                    <li> Contact</li>
                    <li> Cart</li>
                </ul>
            </div>   
        </div>
    )
}
export default Header;