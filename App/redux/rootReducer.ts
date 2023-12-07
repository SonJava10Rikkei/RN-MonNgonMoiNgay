import {combineReducers} from '@reduxjs/toolkit';
import productReducer from "./RuduxToolkitSaga/product/productSlice";
import {userSlice} from "./RuduxToolkitSaga/user/userSlice";
import authReducer from "./RuduxToolkitSaga/auth/authSlice";
import homeReducer from "./RuduxToolkitSaga/home/homeSlice";
import categoryReducer from "./RuduxToolkitSaga/category/categorySlice";

const rootReducer = combineReducers({
    product: productReducer,
    users: userSlice.reducer,
    auth: authReducer,
    home: homeReducer,
    category: categoryReducer,
});

// Define root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
