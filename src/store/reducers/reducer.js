import { NEXT, PREV } from "../actions/paginationBtn";
import { initialState } from "../initialState";

// export const reducer = (state=initialState, action) => {
//     switch(action.type) {
//         case NEXT: return {
//             ...state,
//             value: state.value + 1
//         };
//         case PREV: return {
//             ...state,
//             value: state.value - 1
//         };
        
//         default: return state;
//     };
// };

export const reducer = (state=initialState, action) => {
    switch(true) {
        case action.type === NEXT && state.value < state.cards.length - 1: return {
            ...state,
            value: state.value + 1
        };
        case action.type === PREV && state.value > 0: return {
            ...state,
            value: state.value - 1
        };
        
        default: return state;
    };
};