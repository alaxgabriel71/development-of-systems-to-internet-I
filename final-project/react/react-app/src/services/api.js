import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001",
    origin: true,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    }
});

export default api;