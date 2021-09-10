import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

const API = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    timeout: 10000
});

const STORE_END_POINT = {
    LOGIN: 'auth/login',
    REGISTER: 'auth',
    GET_USER: 'auth',
    STORE_COLLECTIONS: 'store/collections',
};

export { API, STORE_END_POINT };
