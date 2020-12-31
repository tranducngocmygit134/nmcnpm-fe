import axios from 'axios';

export default axios.create({
  baseURL: 'https://cnpm2020.herokuapp.com/api/v1/products',
  // baseURL: 'http://localhost:3001/api/v1/products',
});
