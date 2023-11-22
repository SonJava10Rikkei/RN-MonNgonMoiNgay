import axiosClient from './axiosClient';
import { ListResponse, Product, ListParams } from '../models';

const productApi = {
    getAll(params?: ListParams): Promise<ListResponse<Product>> {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    getById(id: number): Promise<Product> {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data: Product): Promise<Product> {
        const url = '/products';
        return axiosClient.post(url, data);
    },

    update(data: Product): Promise<Product> {
        const url = '/products';
        return axiosClient.patch(url, data);
    },

    remove(id: number): Promise<any> {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
