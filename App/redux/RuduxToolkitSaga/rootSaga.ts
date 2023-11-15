import {all} from 'redux-saga/effects'
import catSaga from './sagas/testSaga/catSaga'
import productSaga from "./sagas/testSaga/productSaga";
import userSaga from "./sagas/testSaga/userSaga";
import counterSaga from "./sagas/testSaga/counterSaga";

function* rootSaga() {
    yield all([
        catSaga(),
        productSaga(),
        userSaga(),
        counterSaga(),
    ]);
};
export default rootSaga;
