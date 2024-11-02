import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/',
});

export default axiosInstance;
