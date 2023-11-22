import {call, put, takeEvery} from 'redux-saga/effects';
import {getUsersFailure, getUsersSuccess} from '../reducers/slices/userSlice';

type GeneratorFunction = Generator<any, any, any>;

// Hàm worker của saga cho việc lấy dữ liệu người dùng
export function* workGetUsersFetch(): GeneratorFunction {

        const users = yield call(() => fetch('http://localhost:3000/user'));
        const formattedUsers = yield users.json();
        yield put(getUsersSuccess(formattedUsers));

        yield put(getUsersFailure());
}

// Hàm generator root của saga cho người dùng
export default function* userSaga() {
    yield takeEvery('users/getUsersFetch', workGetUsersFetch);
}

