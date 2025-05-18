import axios, { AxiosError } from "axios";
const backend_url = import.meta.env.VITE_BACKEND_URL;
const token_key = import.meta.env.VITE_LOCAL_STORAGE_TOKEN_KEY;

const axiosInstance = axios.create({ baseURL: `${backend_url}/api` });

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(token_key);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        localStorage.removeItem(token_key);
        if (error.response?.status == axios.HttpStatusCode.Unauthorized) {
            window.location.href = "/login";
        }
        return error;
    },
);

export default axiosInstance;
