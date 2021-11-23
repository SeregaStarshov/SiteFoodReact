import React from "react";
import './CardFood.css';
import FoodLabel from "./foodLabel/FoodLabel";


const CardFood = (props) => {
    const label = props.item.label;
    return (
        <div className="delivery-food__card" style={{backgroundImage: `url(${props.item.backgroundImage})`}}>
            <FoodLabel label={label} />
        </div>
    );
};

export default CardFood;