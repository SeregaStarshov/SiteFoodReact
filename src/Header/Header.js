import React from "react";
import '../Header/Header.css';
import Logo from "./Logo/Logo";
import InputSearch from "./Search/InputSearch";
import EnterLogin from "./EnterLogin/EnterLogin";
import logo from "../images/logo.png";
import search from "../images/search-icon.svg";
import basket from "../images/basket.svg";

const Header = () => {
    return (
        <header className="header container">
            <Logo src={logo} />
            <InputSearch src={search} />
            <EnterLogin src={basket} />
        </header>
    );
};

export default Header;