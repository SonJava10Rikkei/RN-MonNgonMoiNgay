import {all} from 'redux-saga/effects'
import catSaga from './testSaga/catSaga'
import productSaga from "./testSaga/productSaga";
import userSaga from "./testSaga/userSaga";
import counterSaga from "./testSaga/counterSaga";

function* rootSaga() {
    yield all([
        catSaga(),
        productSaga(),
        userSaga(),
        counterSaga(),
    ]);
};
export default rootSaga;
