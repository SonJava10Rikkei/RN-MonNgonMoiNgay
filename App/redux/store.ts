import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from "./reducers/CalculatorSlice";
import countReducer from "./reducers/CountPlusSlice";


const store = configureStore(
    {
        reducer: {
            calculator: calculatorReducer,
            counter: countReducer
        },
    }
)

export default store;
