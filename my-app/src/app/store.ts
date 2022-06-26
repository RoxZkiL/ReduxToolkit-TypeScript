import { configureStore } from "@reduxjs/toolkit";
import resevationReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice";


export const store = configureStore({
    reducer: {
        resevations: resevationReducer,
        customer: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;