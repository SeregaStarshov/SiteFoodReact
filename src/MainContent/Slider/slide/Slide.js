import React from "react";
import "./Slide.css";
import ButtonOrder from "../buttonOrder/ButtonOrder";
import { useSelector } from "react-redux";


const Slide = () => {
    const arrCards = useSelector((state) => state.paginationReducer.cards);
    const value = useSelector(state => state.paginationReducer.value);
    const newArrCards = arrCards.find((elem, index) => index === value);
    return (
        <div className="slide" style={{backgroundImage: `url(${newArrCards.src})`}}>
            <div className="slide__content">
                <h1 className="slide__title">{newArrCards.title}</h1>
                <p className="slide__subtitle">
                    {newArrCards.subtitle}
                </p>
                <ButtonOrder text={"Заказать со скидкой"} bgColor={'#F47322'} color={'#FFFFFF'} />
            </div>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         ...state
//     };
// };


export default Slide;