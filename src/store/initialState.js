import bg1 from '../images/product_background1.jpg';
import bg2 from '../images/product_background2.jpg';
import bg3 from '../images/product_background3.jpg';

export const initialState = {
    cards: [
        {
            id: 1,
            title: "Витаминная неделя",
            subtitle: "Специальная овощная корзина. Новые весенние продукты!",
            src: bg1
        },
        {
            id: 2,
            title: "Неделя летних овощей",
            subtitle: "Специальная овощная корзина. Новые продукты, специальные цены, скидки!",
            src: bg2
        },
        {
            id: 3,
            title: "Неделя осенних овощей",
            subtitle: "Специальная осенняя овощная козина.",
            src: bg3
        },
    ],
    value: 0
};