import React from "react";
import './sectionFood.css';
import SectionBlock from './sectionBlock/sectionBlock';
import {initialStateFood} from '../../store/initialStateFood';

const SectionFood =  () => {
    const arrayFood = initialStateFood.cardsFood;
    return (
        <div className="section-food container">
            {arrayFood.map((item, index) => {
                return (
                    <SectionBlock key={index} item={item} />
                );
            })}
        </div>
    );
};

export default SectionFood;