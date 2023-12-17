import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
    // baseURL: 'http://mon-973767c9f0f6.herokuapp.com/api',
    // baseURL: 'http://192.168.9.104:3000/api/',
    baseURL: 'http://192.168.9.104:8080/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.request.use(
// @ts-ignore
    function (config: AxiosRequestConfig) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data; // chi cần lấy data từ response
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient;
