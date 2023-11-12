import {createSlice} from "@reduxjs/toolkit";

const calculatorStateSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
    }
});

export const {increment, decrement} = calculatorStateSlice.actions;
export default calculatorStateSlice.reducer;
