import {all, call, put, takeLatest} from "redux-saga/effects";
import {homeAction, RankingByCategory} from "./homeSlice";
import {Category, ListResponse, Product} from "../../../common/models";
import productApi from "../../../api/productApi";
import categoryApi from "../../../api/categoryApi";


function* fetchStatistics() {
    const responseList: Array<ListResponse<Product>> = yield all([
        call(productApi.getAll, {_page: 1, _limit: 1, nameProduct_like: 'Cơm'}),
        call(productApi.getAll, {_page: 1, _limit: 1, price_gte: 80000}),
        call(productApi.getAll, {_page: 1, _limit: 1, price_lte: 50000}),
    ])

    const statisticList = responseList.map((x => x.pagination._totalRows));
    const [productCount, highPriceCount, lowPriceCount] = statisticList;
    yield put(homeAction.setStatistics({productCount, highPriceCount, lowPriceCount}))
}

function* fetchHighestProductList() {
    const {data}: ListResponse<Product> = yield call(productApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: 'price',
        _order: 'desc',
    })
    yield put(homeAction.setHighestProductList(data))
}

function* fetchLowestProductList() {
    const {data}: ListResponse<Product> = yield call(productApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: 'price',
        _order: 'asc',
    })
    yield put(homeAction.setLowestProductList(data))
}

function* fetchRankingByCategoryList() {
    // Fetch category list
    const {data: categoryList}: ListResponse<Category> = yield call(categoryApi.getAll);
    // Fetch ranking per category
    const callList = categoryList.map((x) =>
        call(productApi.getAll, {
            _page: 1,
            _limit: 5,
            _sort: 'price',
            _order: 'desc',
            categoryId: x.id,
        })
    );
    const responseList: Array<ListResponse<Product>> = yield all(callList);

    const rankingByCategoryList: Array<RankingByCategory> = responseList.map((x, idx) => ({
        categoryId: categoryList[idx].id,
        rankingList: x.data,
    }));
    // update state
    yield put(homeAction.setRankingByCategoryList(rankingByCategoryList))
}

function* fetchHomeData() {
    try {
        yield all([
            call(fetchStatistics),
            call(fetchHighestProductList),
            call(fetchLowestProductList),
            call(fetchRankingByCategoryList),
        ])

    } catch (e) {
        console.log('Failed to fetch homeScreen data')
    }
}

export function* homeSaga() {
    yield takeLatest(homeAction.fetchData.type, fetchHomeData)
};
