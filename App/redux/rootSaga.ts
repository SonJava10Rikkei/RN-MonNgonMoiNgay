import {all} from 'redux-saga/effects'
import producSaga from "./RuduxToolkitSaga/product/producSaga";
import userSaga from "./RuduxToolkitSaga/user/userSaga";
import authSaga from "./RuduxToolkitSaga/auth/authSaga";
import {homeSaga} from "./RuduxToolkitSaga/home/homeSaga";

function* rootSaga() {
    yield all([
        producSaga(),
        userSaga(),
        authSaga(),
        homeSaga(),
    ]);
};
export default rootSaga;
