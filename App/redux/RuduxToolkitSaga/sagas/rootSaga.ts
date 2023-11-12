import {all} from 'redux-saga/effects'
import {catSaga} from './catSaga'
import {productSaga} from "./productSaga";
import {userSaga} from "./userSaga";

function* rootSaga() {
    yield all([
        catSaga(),
        productSaga(),
        userSaga(),

    ]);
};
export default rootSaga;
