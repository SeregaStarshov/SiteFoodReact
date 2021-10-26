import { NEXT, PREV } from "../actions/paginationBtn";
import { initialState } from "../initialState";

export const reducer = (state=initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case NEXT: return {
            id: 3,
            title: "Витаминная неделя",
            subtitle: "Специальная витаминная овощная корзина!",
            src: "3"
        };
        case PREV: return {
            id: 1,
            title: "Неделя осенних овощей",
            subtitle: "Специальная осенняя овощная козина.",
            src: "1"
        };
        
        default: return state;
    };
};