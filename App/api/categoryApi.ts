import axiosClient from './axiosClient';
import {Category, ListParams, ListResponse, Product} from '../common/models';

const categoryApi = {
    // getAll(): Promise<ListResponse<Category>> {
    //     const url = '/categories';
    //     return axiosClient.get(url, {
    //         params: {
    //             _page: 1,
    //             _limit: 10,
    //         },
    //     });
    // },

    getAll(params?: ListParams): Promise<ListResponse<Category>> {
        const url = '/categories';
        return axiosClient.get(url, {params});
    },
};

export default categoryApi;
