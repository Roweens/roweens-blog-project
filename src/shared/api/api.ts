import axios from 'axios';
import { AUTH_LOCALSTORAGE_KEY } from '../const/localstorage';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization =
            localStorage.getItem(AUTH_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
