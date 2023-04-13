import axios from "axios";
import { API } from "../constants";

const apiClient = axios.create({
  baseURL: API.API_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers["x-auth"] = token;

  return config;
});

export default apiClient;
