import React from "react";
import './FoodLabel.css';

const FoodLabel = (props) => {
    return (
        <div className="delivery-food__card-label">
            <span className="delivery-food__card-label--text" 
            style={{color: props.label.colorText, backgroundColor: props.label.backgroundColor}}>
                {props.label.text}
            </span>
        </div>
    );
};

export default FoodLabel;