import { createSlice } from '@reduxjs/toolkit';

interface User {
    id: number;
    name?: string;
    address?: string;
    phone?: string;
    email: string;
    password: string;
}

interface UserState {
    users: User[];
    isLoading: boolean;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersFetch: (state) => {
            state.isLoading = true;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        getUsersFailure: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure } = userSlice.actions;
export default userSlice.reducer;
