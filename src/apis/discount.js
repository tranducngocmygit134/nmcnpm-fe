import axios from 'axios';

export default axios.create({
  baseURL:
    'https://cnpm2020.herokuapp.com/api/v1/products?category=1789&sort=-price&limit=20',
  // 'http://localhost:3001/api/v1/products?category=1789&sort=-price&limit=20',
});
