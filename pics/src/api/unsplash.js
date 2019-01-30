 import axios from 'axios';

 export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID bc4ff142798e32d6d520300ca4e1d485664b5c5e04fc1ebb6567f6852dbe2968'
    }
 })