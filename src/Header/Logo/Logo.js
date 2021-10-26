import React from "react";
import "../Logo/Logo.css";

const Logo = (props) => {
    return (
            <div className="header__logo">
                <a className="header__logo-link" href="/">
                    <img className="logo" width="128" src={props.src} alt="logo:food"></img>
                </a>
            </div>
    );
};

export default Logo;