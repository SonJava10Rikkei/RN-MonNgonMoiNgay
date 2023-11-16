import {combineReducers} from '@reduxjs/toolkit'
import {catSateSlice} from "./reducers/slices/catSateSlice";
import {productSlice} from "./reducers/slices/productsSlice";
import {userSlice} from "./reducers/slices/userSlice";
import {counterSlice} from "./reducers/slices/counter/counterSlice";

const rootReducer = combineReducers({
    catsReducer: catSateSlice.reducer,
    productsReducer: productSlice.reducer,
    usersReducer: userSlice.reducer,
    counterReducer: counterSlice.reducer,
})

export default rootReducer;
