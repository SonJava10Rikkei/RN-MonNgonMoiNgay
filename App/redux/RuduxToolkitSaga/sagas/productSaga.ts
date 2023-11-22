import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from '../reducers/slices/productsSlice';

type GeneratorFunction = Generator<any, any, any>;

export function* workGetProductsFetch(): GeneratorFunction {
        const listProducts = yield call(() => fetch('http://192.168.9.104:3000/api/products'));
        const formattedProducts = yield listProducts.json();
        yield put(getProductsSuccess(formattedProducts.products));
        yield put(getProductsFailure());

}

// Hàm generator root của saga cho sản phẩm
export default function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch);
}
