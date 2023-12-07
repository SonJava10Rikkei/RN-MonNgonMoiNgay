import {createSlice} from "@reduxjs/toolkit";
import {Category, Product} from "../../../common/models";

interface CategoryState {
    listCategories: Category[];
    isLoading: boolean;
}

const initialState: CategoryState = {
    listCategories: [],
    isLoading: false,
};
export const categorySlice = createSlice({
    name: "category",
    initialState:initialState,
    reducers:{
        getCategoriesFetch: (state) => {
            state.isLoading = true;
        },
        getCategoriesSuccess: (state, action) => {
            state.listCategories = action.payload;
            state.isLoading = false;
        },
        getCategoriesFailure: (state) => {
            state.isLoading = false;
        },
    }
});

// Actions
export const categoryActions = categorySlice.actions;
// Selectors
export const selectCategories = (state: any) => state.category.listCategories;
export const selectIsLoading = (state: any) => state.category.isLoading;
// Reducer
const categoryReducer = categorySlice.reducer;
export default categoryReducer;


