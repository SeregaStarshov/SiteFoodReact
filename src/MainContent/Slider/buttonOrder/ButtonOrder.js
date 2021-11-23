import React from "react";
import "./ButtonOrder.css";

const ButtonOrder = (props) => {
    return (
        <button className="order" type="button" style={{background: props.bgColor, color: props.color}}>{props.text}</button>
    );
};

export default ButtonOrder;