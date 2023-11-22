import {call, put, takeEvery} from 'redux-saga/effects';
import {getCatsSuccess} from '../reducers/slices/catSateSlice';

type GeneratorFunction = Generator<any, any, any>;

export function* workGetCatsFetch(): GeneratorFunction {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0, 2);
    yield put(getCatsSuccess(formattedCatsShortened));
}

// Hàm generator root của saga
export default function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}
