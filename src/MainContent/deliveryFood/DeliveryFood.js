import React from "react";
import './DeliveryFood.css';
import { initialStateDeliveryFood } from "../../store/initialStateDeliveryFood";
import CardFood from './cardFood/CardFood';

const DeliveryFood = () => {
    const arrCardDeliveryFood = initialStateDeliveryFood.cardsDelivery;
    console.log(arrCardDeliveryFood)
    return (
        <section className="delivery-food container">
            <h2 className="delivery-food__title">Доставка готовой еды на неделю</h2>
            {arrCardDeliveryFood.map((item, index) => {
                return (
                    <CardFood key={index} item={item} />
                );
            })}
        </section>
    );
};

export default DeliveryFood;