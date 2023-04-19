import axios from "axios";
import { API_BASE_URL } from "../../constants/api";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
