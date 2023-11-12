import {call, put, takeEvery} from 'redux-saga/effects';
import {getUsersFailure, getUsersSuccess} from '../reducers/slices/userSlice';

type GeneratorFunction = Generator<any, any, any>;

// Hàm worker của saga cho việc lấy dữ liệu người dùng
export function* workGetUsersFetch(): GeneratorFunction {
    try {
        // Thay thế đường dẫn API bằng đường dẫn thực tế của bạn
        const users = yield call(() => fetch('http://localhost:3000/user'));
        const formattedUsers = yield users.json();
        yield put(getUsersSuccess(formattedUsers));
    } catch (error) {
        console.error('Lỗi trong workGetUsersFetch:', error);
        yield put(getUsersFailure());
    }
}

// Hàm generator root của saga cho người dùng
export function* userSaga() {
    yield takeEvery('users/getUsersFetch', workGetUsersFetch);
}

export default userSaga;
