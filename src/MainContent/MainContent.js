import React from "react";
import "./MainContent.css";
import PaginationButton from "./Slider/paginationButton/PaginationButton";
import Slide from "./Slider/slide/Slide";
import next from "../images/next-btn.svg";
import prev from "../images/prev-btn.svg";
import SectionFood from "./sectionFood/sectionFood";
import { nextSlide, prevSlide } from "../store/slice/paginationSlice";
import DeliveryFood from './deliveryFood/DeliveryFood';

const MainContent = () => {
    return (
        <main className="main container">
            <div className="slider-wrapper">
                <Slide />
                <div className="pagination-wrap">
                    <PaginationButton btn={prev} click={prevSlide} />
                    <PaginationButton btn={next} click={nextSlide} />
                </div>
            </div>
            <SectionFood />
            <DeliveryFood />
        </main>
    );
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         prevSlide: () => store.dispatch(prevSlide()),
//         nextSlide: () => store.dispatch(nextSlide())
//     }
// }

export default MainContent;