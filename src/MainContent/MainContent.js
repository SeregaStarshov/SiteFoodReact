import React from "react";
import "./MainContent.css";
import PaginationButton from "./Slider/PaginationButton";
import Slide from "./Slider/Slide";
import next from "../images/next-btn.svg";
import prev from "../images/prev-btn.svg";
import { prevSlide } from "../store/actionCreators/prevSlide";
import { nextSlide } from "../store/actionCreators/nextSlide";
import { store } from "../store/store";

const MainContent = () => {
    return (
        <main className="main container">
            <div className="slider-wrapper">
                <Slide store={store} />
                <div className="pagination-wrap">
                    <PaginationButton click={() => {
                        store.dispatch(prevSlide());
                        console.log(store.getState());
                    }} btn={prev} />
                    <PaginationButton btn={next} click={() => {
                        store.dispatch(nextSlide());
                        console.log(store.getState());
                    }} />
                </div>
            </div>
        </main>
    );
};

export default MainContent;