
import {createSlice} from '@reduxjs/toolkit';
import {Product} from "../../../common/models";


interface UserState {
    listProducts: Product[];
    isLoading: boolean;
}

const initialState: UserState = {
    listProducts: [],
    isLoading: false,
};
export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, action) => {
            state.listProducts = action.payload;
            state.isLoading = false;
        },
        getProductsFailure: (state) => {
            state.isLoading = false;
        },
    },
});


export const {getProductsFetch, getProductsSuccess, getProductsFailure} = productSlice.actions;
export default productSlice.reducer;
