import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store';
import { fetchCount } from './testCounterAPI';

export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
});

export const testCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },

        incrementSaga: (state, action: PayloadAction<number>) => {
            state.status = 'loading';
        },
        incrementSagaSuccess: (state, action: PayloadAction<number>) => {
            state.status = 'idle';
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
});

export const { increment, decrement, incrementByAmount, incrementSaga, incrementSagaSuccess } =
    testCounterSlice.actions;

export const selectCount = (state: RootState) => state.counterReducer.value;
export const incrementIfOdd =
    (amount: number): AppThunk =>
        (dispatch, getState) => {
            const currentValue = selectCount(getState());
            if (currentValue % 2 === 1) {
                dispatch(incrementByAmount(amount));
            }
        };

export default testCounterSlice.reducer;
