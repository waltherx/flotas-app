import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        //'Accept-Encoding': 'gzip,deflate,compress',
    },
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

