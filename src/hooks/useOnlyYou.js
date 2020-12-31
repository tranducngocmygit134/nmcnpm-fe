import { useState, useEffect } from 'react';
import productApi from '../apis/product';

const useOnlyYou = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('run use custom hook');
    productApi
      .get(`?category=1789&limit=10&page=${page}&sort=-price`)
      .then((response) => {
        let { data } = response.data;
        setProducts((prev) => [...prev, ...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return [products, page, setPage];
};

export default useOnlyYou;
