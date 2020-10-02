import axios from 'axios';

let URL;

if (process.env.NODE_ENV === 'development') {
    URL = 'http://localhost:8080/api';
} 
// if (process.env.NODE_ENV === 'test') {
//     URL === '';
// }
// if (process.env.NODE_ENV === 'production') {
//     URL = process.env.PROD_URL;
// }

const client = axios.create({
    baseURL: URL,
})

client.interceptors.response.use(
    (res) => res.data,
    (error) => {
        throw error;
    }
);

export default client;