import {all} from 'redux-saga/effects'
import catSaga from './sagas/catSaga'
import productSaga from "./sagas/productSaga";
import userSaga from "./sagas/userSaga";
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
