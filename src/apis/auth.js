import axios from 'axios';

const authApi = axios.create({
  // baseURL: 'http://localhost:3001/api/v1/users',
  baseURL: 'https://cnpm2020.herokuapp.com/api/v1/users',
  withCredentials: true,
});

export default authApi;
