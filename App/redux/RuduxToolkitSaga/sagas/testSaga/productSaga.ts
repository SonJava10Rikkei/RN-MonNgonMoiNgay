import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from '../../reducers/slices/productsSlice';

type GeneratorFunction = Generator<any, any, any>;

export function* workGetProductsFetch(): GeneratorFunction {
        const products = yield call(() => fetch('https://dummyjson.com/products'));
        const formattedProducts = yield products.json();
        yield put(getProductsSuccess(formattedProducts.products));
        yield put(getProductsFailure());

}

// Hàm generator root của saga cho sản phẩm
export default function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch);
}
