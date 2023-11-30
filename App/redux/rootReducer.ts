import {combineReducers} from '@reduxjs/toolkit';
import {productSlice} from "./RuduxToolkitSaga/product/productSlice";
import {userSlice} from "./RuduxToolkitSaga/user/userSlice";
import authReducer from "./RuduxToolkitSaga/auth/authSlice";
import homeReducer from "./RuduxToolkitSaga/home/homeSlice";

const rootReducer = combineReducers({
    listProducts: productSlice.reducer,
    users: userSlice.reducer,
    auth: authReducer,
    home: homeReducer,
});

// Define root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
