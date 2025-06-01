import { useState } from "react";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt='company-logo'></img>
            </div>

            {/* navlinks */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        loginBtn==="login"?setLoginBtn("logout"):setLoginBtn("login");
                    }} className="login">{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;