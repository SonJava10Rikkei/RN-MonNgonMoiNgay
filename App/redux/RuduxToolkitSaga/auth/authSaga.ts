import {authActions, LoginPayload} from './authSlice';
import {call, fork, put, take} from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Animated} from "react-native";
import delay = Animated.delay;


const checkAccessToken = async () => {
    try {
        const accessToken: string | null = await AsyncStorage.getItem('access_token');
        if (accessToken !== null) {
            console.log('Access token is present:', accessToken);
        } else {
            console.log('No access token found');
        }
    } catch (error) {
        console.error('Error checking access token:', error);
    }
};
checkAccessToken();

// Gọi hàm kiểm tra
function* handleLogin(payload: LoginPayload) {
    console.log('handleLogin: ',)
    try {
        yield delay(1000);
        yield call([AsyncStorage, 'setItem'], 'access_token', 'fake_token');
        yield put(authActions.loginSuccess({
                // @ts-ignore
                id: 1,
                name: 'fake_token'
            })
        );

    } catch (error: any) {
        console.error('Error in handleLogin:', error);
        yield put(authActions.loginFailed(error.message));
    }
    checkAccessToken()
    // redirect to admin page

};

function* handleLogout() {
    console.log('handleLogout: ',)
    yield delay(500);
    AsyncStorage.removeItem('access_token');
    checkAccessToken()
    // redirect to loginScreen


};

function* watchLoginFlow() {
    while (true) {
        console.log('watchLoginFlow: ',)
        const getAccessToken: string | null = yield call([AsyncStorage, 'getItem'], 'access_token');
        const isLoggedIn = Boolean(getAccessToken);
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }
        yield take(authActions.logout.type);
        yield call(handleLogout);
    }

};

export default function* authSaga() {
    yield fork(watchLoginFlow);
};
