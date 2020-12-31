import axios from 'axios';

export default axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://tiki.vn/api/v2/search/suggestion',
});
