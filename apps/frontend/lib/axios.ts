import axios from "axios";
import { APP_CONFIG } from "@/globals";

const api = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
  timeout: 30_000,
  headers: { "Content-Type": "application/json" },
});

// Response interceptor — unwrap .data, normalize errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error?.response?.data?.message ?? error?.message ?? "Unknown error";
    return Promise.reject(new Error(message));
  }
);

export default api;
