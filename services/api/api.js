import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://172.16.73.17:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
