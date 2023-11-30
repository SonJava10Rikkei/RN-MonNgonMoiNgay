import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/compat";
import User = firebase.User;

export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthSate {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}

const initialState: AuthSate = {
    logging: false,
    isLoggedIn: false,
    currentUser: undefined

}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
        setLoggedIn(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload;
        },
    },
})

// Actions
export const authActions = authSlice.actions;
//Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const selectCurrentUser = (state: any) => state.auth.currentUser;
export const selectIsLogin = (state: any) => state.auth.logging;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;
