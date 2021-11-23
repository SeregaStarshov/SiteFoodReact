import { configureStore } from "@reduxjs/toolkit";
import {paginationSliceReducer} from './slice/paginationSlice';


export const store = configureStore(
    {
        reducer: {
            paginationReducer: paginationSliceReducer,
        }
    }
)
