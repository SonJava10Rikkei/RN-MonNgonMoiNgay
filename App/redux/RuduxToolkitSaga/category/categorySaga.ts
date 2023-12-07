import { call, put, takeEvery } from 'redux-saga/effects';
import {Category} from "../../../common/models";
import {categoryActions} from "./categorySlice";
import categoryApi from "../../../api/categoryApi";


export function* workGetCategoriesFetch() {
    try {
        const response: Category[] = yield call(categoryApi.getAll, []);
        // @ts-ignore
        yield put(categoryActions.getCategoriesSuccess(response?.data));
    } catch (error) {
        yield put(categoryActions.getCategoriesFailure);
        console.error('Error fetching products:', error);
    }
}

export default function* categorySaga() {
    // Sử dụng takeEvery để xử lý mọi action 'getProductsFetch' được gửi
    yield takeEvery(categoryActions.getCategoriesFetch, workGetCategoriesFetch);
}
