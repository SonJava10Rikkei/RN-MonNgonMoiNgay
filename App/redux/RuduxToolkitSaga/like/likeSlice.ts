import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
    name: 'like',
    initialState: {
        listLikeProducts: [],
        likeStatusMap: new Map(),
    },
    reducers: {
        setLikedProducts: (state, action) => {
            state.listLikeProducts = action.payload.listLikeProducts;
        },
        setLikeStatusMap: (state, action) => {
            state.likeStatusMap = action.payload.likeStatusMap;
        },
        toggleLikeStatus: (state, action) => {
            const { likeId } = action.payload;
            state.likeStatusMap.set(likeId, !state.likeStatusMap.get(likeId));
        },
    },
});

// Actions
export const likeActions = likeSlice.actions
// Selectors
export const selectListLikeProducts = (state: any)=>state.like.listLikeProducts
export const selectLikeStatusMap = (state: any)=>state.like.likeStatusMap

// Reducer
const likeReducer = likeSlice.reducer
export default likeReducer;
