import React from "react";
import "./PaginationButton.css";

const PaginationButton = (props) => {
    return (
        <div className="pagination-btn" onClick={props.click} >
            <img className="pagination-icon" src={props.btn} alt=""></img>
        </div>
    );
};

export default PaginationButton;