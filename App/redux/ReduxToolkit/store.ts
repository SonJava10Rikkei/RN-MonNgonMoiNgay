import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from "./CalculatorStateSlice";
import countReducer from "./CountPlusStateSlice";


const store = configureStore(
    {
        reducer: {
            calculator: calculatorReducer,
            counter: countReducer
        },
    }
)

export default store;
