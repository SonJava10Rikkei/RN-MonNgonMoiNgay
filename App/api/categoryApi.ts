import axiosClient from './axiosClient';
import { ListResponse, Category } from '../models';

const categoryApi = {
    getAll(): Promise<ListResponse<Category>> {
        const url = '/categories';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
    },
};

export default categoryApi;
