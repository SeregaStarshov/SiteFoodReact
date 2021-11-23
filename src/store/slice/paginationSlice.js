import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "../initialState"

export const paginationSlice = createSlice(
    {
        name: 'pagination',
        initialState,
        reducers: {
            nextSlide: (state) => {
                if (state.value < state.cards.length - 1) {
                    state.value += 1;
                } else {
                    state.value = initialState.value;
                }
            },
            prevSlide: (state) => {
                if (state.value > 0) {
                    state.value -= 1;
                } else {
                    state.value = state.cards.length - 1;
                }
                
            }
        }
    }
);

export const { nextSlide, prevSlide } = paginationSlice.actions;
export const paginationSliceReducer = paginationSlice.reducer;