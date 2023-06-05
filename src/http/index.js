import axios from 'axios';
import { REACT_APP_API_URL } from '../untils/const';

const $host = axios.create({
  baseURL: REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: REACT_APP_API_URL,
});

export { $host, $authHost };
