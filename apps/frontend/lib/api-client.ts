import axios from "axios";
import { APP_CONFIG } from "@/globals/app-config";

export const apiClient = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Basic error handling wrapper
    // Further granular handling can be done in TanStack queries
    console.error("API Error Response:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);
