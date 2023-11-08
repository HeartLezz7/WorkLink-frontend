import axios from "axios";
import {BACKEND_URL} from "./env";
import { deleteAccessToken, getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((config) => {
  alert(config.url)
  const token = getAccessToken();
  if (token) {
    alert('here 222222222')
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(  
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      deleteAccessToken();
      alert("401 reditrecting ")
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axios;
