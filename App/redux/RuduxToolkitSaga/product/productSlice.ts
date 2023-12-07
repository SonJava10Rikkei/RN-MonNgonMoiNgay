import {createSlice} from '@reduxjs/toolkit';
import {Product} from "../../../common/models";


interface ProductState {
    listProducts: Product[];
    isLoading: boolean;
}

const initialState: ProductState = {
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

// Actions
export const productActions = productSlice.actions;

// Selectors
export const selectProducts = (state: any) => state.product.listProducts;
export const selectIsLoading = (state: any) => state.product.isLoading;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
