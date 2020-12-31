import { useEffect, useState } from 'react';

/** Api */
import productApi from '../apis/product';

/**
 * @desc get category from api
 * @returns {Object, function} - product object, function for handle pagination
 */
const useCategory = (query) => {
  /** Hook */
  const [page, setPage] = useState(1);
  const [pageApi, setPageApi] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('run use custom hook');
    (async () => {
      try {
        const response = await productApi.get(`/${query}`, {
          params: {
            limit: 24,
            page,
            skip: 24,
          },
        });
        setPageApi(response.data.paging);
        const { data } = response.data;
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [page, query]);

  return [products, pageApi, page, setPage, loading];
};

export default useCategory;
