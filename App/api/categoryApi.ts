import axiosClient from './axiosClient';
import {ListResponse, Category, ListParams} from '../models';

const categoryApi = {
    getAll(params?: ListParams): Promise<ListResponse<Category>> {
        const url = '/categories';
        return axiosClient.get(url, {params});
    },
};

export default categoryApi;
