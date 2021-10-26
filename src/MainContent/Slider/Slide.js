import React from "react";
import "./Slide.css";
import ButtonOrder from "./ButtonOrder";

const Slide = (props) => {
    console.log(props.store.getState())
    return (
        <div className="slide">
            <div className="slide__content">
                <h1 className="slide__title">{props.store.getState().title}</h1>
                <p className="slide__subtitle">
                    {props.store.getState().subtitle}
                </p>
                <ButtonOrder />
            </div>
        </div>
    );
};

export default Slide;