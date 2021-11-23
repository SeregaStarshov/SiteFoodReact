import React from "react";
import "./PaginationButton.css";
import { useDispatch } from "react-redux";


const PaginationButton = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="pagination-btn" onClick={() => dispatch(props.click())}>
            <img className="pagination-icon" src={props.btn} alt=""></img>
        </div>
    );
};

export default PaginationButton;