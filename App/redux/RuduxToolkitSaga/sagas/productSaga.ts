import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from '../reducers/slices/productsSlice';

type GeneratorFunction = Generator<any, any, any>;

export function* workGetProductsFetch(): GeneratorFunction {
    try {
        const products = yield call(() => fetch('https://dummyjson.com/products'));
        const formattedProducts = yield products.json();
        yield put(getProductsSuccess(formattedProducts.products));
    } catch (error) {
        console.error('Lỗi trong workGetProductsFetch:', error);
        yield put(getProductsFailure());
    }
}

// Hàm generator root của saga cho sản phẩm
export function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch);
}

export default productSaga;
