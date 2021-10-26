import React from "react";
import "./InputSearch.css";

const InputSearch = (props) => {
    return (
            <div className="header__form">
                <form className="form">
                    <input className="form__input-search" type="search" placeholder="Блюда"></input>
                    <button className="form__button-search" type="submit">
                        <img className="search" src={props.src} alt="search"></img>
                    </button>
                </form>
            </div>
    );
};

export default InputSearch;