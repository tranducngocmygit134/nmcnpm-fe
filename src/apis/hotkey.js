import axios from 'axios';

const hotkeyApi = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://tiki.vn/api/v2/personalization/v2/keywords',
});

export default hotkeyApi;
