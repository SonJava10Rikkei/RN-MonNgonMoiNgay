import {createSlice} from "@reduxjs/toolkit";
const countPlusStateSlice = createSlice({
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
export const {add, dec} = countPlusStateSlice.actions;
export default countPlusStateSlice.reducer;
