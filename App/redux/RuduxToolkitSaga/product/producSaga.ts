import { call, put, takeEvery } from 'redux-saga/effects';
import { productActions} from './productSlice';
import productApi from '../../../api/productApi';
import {Product} from "../../../common/models";

// Hàm generator để xử lý action 'getProductsFetch'
export function* workGetProductsFetch() {
    try {
        // Gọi API để lấy danh sách sản phẩm
        const response: Product[] = yield call(productApi.getAll, []);
        // Nếu request thành công, dispatch action getProductsSuccess với dữ liệu nhận được
        // @ts-ignore
        yield put(productActions.getProductsSuccess(response?.data));
    } catch (error) {
        // Nếu có lỗi, dispatch action getProductsFailure với thông báo lỗi
        yield put(productActions.getProductsFailure());
        console.error('Error fetching products:', error);
    }
}

// Hàm generator root của saga cho sản phẩm
export default function* productSaga() {
    // Sử dụng takeEvery để xử lý mọi action 'getProductsFetch' được gửi
    yield takeEvery(productActions.getProductsFetch, workGetProductsFetch);
}
