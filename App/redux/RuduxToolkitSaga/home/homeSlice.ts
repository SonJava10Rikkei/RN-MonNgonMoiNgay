import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "../../../common/models";
import {RootState} from "../../store";

export interface HomeStatistics {
    productCount: number;
    highPriceCount: number;
    lowPriceCount: number;
};

export interface RankingByCategory {
    categoryId?: number;
    rankingList?: Product[];
}

export interface HomeState {
    loading: boolean;
    statistics: HomeStatistics;
    highestProductList: Product[];
    lowestProductList: Product[];
    rankingByCategoryList: RankingByCategory[];
};

const initialState: HomeState = {
    loading: false,
    statistics: {
        productCount: 0,
        highPriceCount: 0,
        lowPriceCount: 0,
    },
    highestProductList: [],
    lowestProductList: [],
    rankingByCategoryList: [],
}

// Create the productSlice
export const homeSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        fetchData(state) {
            state.loading = true;
        },
        fetchDataSuccess(state) {
            state.loading = false;
        },
        fetchDataFailed(state) {
            state.loading = false;
        },

        setStatistics(state, action: PayloadAction<HomeStatistics>) {
            state.statistics = action.payload;
        },
        setHighestProductList(state, action: PayloadAction<Product[]>) {
            state.highestProductList = action.payload;
        },
        setLowestProductList(state, action: PayloadAction<Product[]>) {
            state.lowestProductList = action.payload;
        },
        setRankingByCategoryList(state, action: PayloadAction<RankingByCategory[]>) {
            state.rankingByCategoryList = action.payload;
        },
    }

});

// Actions
export const homeAction = homeSlice.actions;
// Selects
export const selectHomeLoading = (state: RootState) => state.home.loading;
export const selectHomeStatistics = (state: RootState) => state.home.statistics;
export const selectHomeHighestProductList = (state: RootState) => state.home.highestProductList;
export const selectHomeLowestProductList = (state: RootState) => state.home.lowestProductList;
export const selectHomeRankingByCategoryList = (state: RootState) => state.home.rankingByCategoryList;

// Reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;
