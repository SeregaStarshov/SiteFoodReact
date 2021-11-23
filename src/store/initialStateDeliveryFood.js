import zozh from '../images/deliveryFood/zozh.jpg';
import vegetable from '../images/deliveryFood/vegetable.jpg';
import meat from '../images/deliveryFood/meat.jpg';
import bird from '../images/deliveryFood/bird.jpg';
import fish from '../images/deliveryFood/fish.jpg';
import baby from '../images/deliveryFood/baby.jpg';
import parents from '../images/deliveryFood/parents.jpg';
import festive from '../images/deliveryFood/festive.jpg';

export const initialStateDeliveryFood = {
    cardsDelivery: [
        {
            id: 1,
            backgroundImage: zozh,
            label: {
                backgroundColor: '#D0FD89',
                text: 'ЗОЖ',
                colorText: '#49494F'
            }
        },
        {
            id: 2,
            backgroundImage: vegetable,
            label: {
                backgroundColor: '#AEBC41',
                text: 'Овощное',
                colorText: '#FFFFFF'
            }
        },
        {
            id: 3,
            backgroundImage: meat,
            label: {
                backgroundColor: '#B86B78',
                text: 'Мясное',
                colorText: '#FFFFFF'
            }
        },
        {
            id: 4,
            backgroundImage: bird,
            label: {
                backgroundColor: '#D68334',
                text: 'Птица',
                colorText: '#FFFFFF'
            }
        },
        {
            id: 5,
            backgroundImage: fish,
            label: {
                backgroundColor: '#CD6255',
                text: 'Рыбное',
                colorText: '#FFFFFF'
            }
        },
        {
            id: 6,
            backgroundImage: baby,
            label: {
                backgroundColor: '#FFFDBF',
                text: 'Детское',
                colorText: '#49494F'
            }
        },
        {
            id: 7,
            backgroundImage: parents,
            label: {
                backgroundColor: '#F6FDC8',
                text: 'Родителям',
                colorText: '#49494F'
            }
        },
        {
            id: 8,
            backgroundImage: festive,
            label: {
                backgroundColor: '#FEF7FE',
                text: 'Праздничное',
                colorText: '#49494F'
            }
        },
    ]
}