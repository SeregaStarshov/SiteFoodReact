import React from "react";
import "./EnterLogin.css";

const EnterLogin = (props) => {
    return (
        <div className="header__private-office">
            <a className="header__enter-login" href="/enter-login">Войти</a>
            <a className="header__basket" href="/basket">
                <img className="basket-icon" alt="basket-icon" src={props.src}></img>
                <span className="basket-counter">12</span>
            </a>
        </div>
    );
};

export default EnterLogin;