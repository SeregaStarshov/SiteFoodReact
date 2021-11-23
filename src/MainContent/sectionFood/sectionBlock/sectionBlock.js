import React from "react";
import './sectionBlock.css';
import ButtonOrder from "../../Slider/buttonOrder/ButtonOrder";

const SectionBlock = (props) => {
    return (
        <div className="section-food__item" style={{backgroundImage: `url(${props.item.backgroundImage})`}}>
            <h2 className="section-food__item-title">{props.item.title}</h2>
            <p className="section-food__item-subtitle">
                {props.item.subtitle}
            </p>
            <span className="section-food__item-price">{props.item.price}</span>
            <p className="section-food__item-price-delivery">{props.item.delivery}</p>
            <ButtonOrder text={"Собрать корзину"} bgColor={'#FFFFFF'} color={'#5F5F61'} />
        </div>
    );
};

export default SectionBlock;