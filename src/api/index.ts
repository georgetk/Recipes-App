import axios from 'axios';
import {NETWORK_URL} from '../constants';

export const axiosInstance = axios.create({baseURL: NETWORK_URL.BASE_URL});
