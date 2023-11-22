import {combineReducers} from '@reduxjs/toolkit'
import {catSateSlice} from "./reducers/slices/catSateSlice";
import {productSlice} from "./reducers/slices/productsSlice";
import {userSlice} from "./reducers/slices/userSlice";
import {testCounterSlice} from "./reducers/slices/testCounter/testCounterSlice";

const rootReducer = combineReducers({
    catsReducer: catSateSlice.reducer,
    productsReducer: productSlice.reducer,
    usersReducer: userSlice.reducer,
    counterReducer: testCounterSlice.reducer,
})

export default rootReducer;
