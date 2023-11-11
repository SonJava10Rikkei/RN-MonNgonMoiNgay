import {createSlice} from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
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

export const {increment, decrement} = calculatorSlice.actions;
export default calculatorSlice.reducer;
