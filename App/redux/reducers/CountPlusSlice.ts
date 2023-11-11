import {createSlice} from "@reduxjs/toolkit";
const countPlusSlice = createSlice({
    name: 'CountPlus',
    initialState: {
        count: 0,
    },
    reducers: {
        add: (state, action) => {
            state.count += action.payload;
        },
        dec: (state, action) => {
            state.count -= action.payload;
        }
    }
});
export const {add, dec} = countPlusSlice.actions;
export default countPlusSlice.reducer;
