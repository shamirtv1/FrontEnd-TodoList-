import { getAccessToken } from '@/helpers';
import axios from 'axios'

const TodoListApi = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});


TodoListApi.interceptors.request.use(function (config) {
    // Do something before request is sent

    const accessToken = getAccessToken();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    

    return config;

}, function (error) {
    return Promise.reject(error);
});


export default TodoListApi;