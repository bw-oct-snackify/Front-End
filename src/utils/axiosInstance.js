import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://afternoon-tor-81402.herokuapp.com';
export const axiosInstance = axios;