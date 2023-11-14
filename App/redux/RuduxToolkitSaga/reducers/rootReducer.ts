import {combineReducers} from '@reduxjs/toolkit'
import {catSateSlice} from "./slices/catSateSlice";
import {productSlice} from "./slices/productsSlice";
import {userSlice} from "./slices/userSlice";
import {counterSlice} from "./slices/counter/counterSlice";


const rootReducer = combineReducers({
    catsReducer: catSateSlice.reducer,
    productsReducer: productSlice.reducer,
    usersReducer: userSlice.reducer,
    counterReducer: counterSlice.reducer,
})

export default rootReducer;
