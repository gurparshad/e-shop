import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000' // the API URL
});

export default instance;