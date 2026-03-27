import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://ipdapessoa:PortaDaEscolha',
});

export default api;
