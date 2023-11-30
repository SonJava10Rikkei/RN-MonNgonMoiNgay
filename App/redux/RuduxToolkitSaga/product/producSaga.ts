import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure, getProductsFetch } from './productSlice';
import productApi from "../../../api/productApi";




export function* workGetProductsFetch() {

}

// Hàm generator root của saga cho sản phẩm
export default function* producSaga() {
    yield takeLatest(getProductsFetch.type, workGetProductsFetch);
}
