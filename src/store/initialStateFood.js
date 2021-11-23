import sweetBasket from '../images/sweetBasket.jpg';
import minimumEffort from '../images/minimum-effort.jpg';

export const initialStateFood = {
    cardsFood: [
        {
            id: 1,
            title: 'Сладкая корзина',
            subtitle: 'Произвольный выбор десертов по Вашему желанию.',
            price: 'ОТ 1 300 ₽',
            delivery: 'стоимость доставки до 200 ₽',
            backgroundImage: sweetBasket,
        },
        {
            id: 2,
            title: 'Минимум усилий',
            subtitle: 'Произвольный выбор продуктов по Вашему желанию.',
            price: 'ОТ 700 ₽',
            delivery: 'стоимость доставки до 200 ₽',
            backgroundImage: minimumEffort,
        }
    ]
}