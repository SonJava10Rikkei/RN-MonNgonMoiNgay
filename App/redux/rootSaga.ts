import {all} from 'redux-saga/effects'
import productSaga from "./RuduxToolkitSaga/product/producSaga";
import userSaga from "./RuduxToolkitSaga/user/userSaga";
import authSaga from "./RuduxToolkitSaga/auth/authSaga";
import {homeSaga} from "./RuduxToolkitSaga/home/homeSaga";
import categorySaga from "./RuduxToolkitSaga/category/categorySaga";

function* rootSaga() {
    yield all([
        productSaga(),
        categorySaga(),
        userSaga(),
        authSaga(),
        homeSaga(),

    ]);
};
export default rootSaga;
