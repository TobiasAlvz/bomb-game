import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://172.16.72.170:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
