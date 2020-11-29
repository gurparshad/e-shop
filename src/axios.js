import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://e-shop-backend99.herokuapp.com/' // the API URL
});

export default instance;