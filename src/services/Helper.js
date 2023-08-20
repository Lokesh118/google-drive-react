import axios from 'axios';
export const BASE_AUTH_URL = 'http://localhost:8080/';
export const BASE_FILE_URL = 'http://localhost:8081/';
export const authAxios = axios.create({
    baseURL:BASE_AUTH_URL
});

export const fileAxios = axios.create({
    baseURL:BASE_FILE_URL
})