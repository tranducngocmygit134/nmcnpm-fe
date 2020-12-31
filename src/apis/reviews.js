import axios from 'axios';

const reviews = axios.create({
  // baseURL: 'http://localhost:3001/api/v1/reviews',
  baseURL: 'https://cnpm2020.herokuapp.com/api/v1/reviews',
  withCredentials: true,
});

export default reviews;
