import {PayloadAction} from "@reduxjs/toolkit";
import {call, delay, put, takeEvery} from "redux-saga/effects";
import {incrementSaga, incrementSagaSuccess} from "../../reducers/slices/counter/counterSlice";
import {fetchCount} from "../../reducers/slices/counter/counterAPI";


export function* log(action: PayloadAction) {
    console.log('Log', action)
}

export function* test() {
    yield fetchCount(2);
    // and
    yield call(fetchCount, 2)
}


export function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Waiting: 2s ',);
    // Wait 2s
    yield delay(2000);
    console.log('Waiting done: dispatch action ');

    // Dispatch action success
    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
    console.log('TestCounter Saga');
    yield takeEvery('*', log);
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga)
}
