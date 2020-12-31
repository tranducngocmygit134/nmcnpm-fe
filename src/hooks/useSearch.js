import { useEffect, useState } from 'react';

/** Api */
import searchApi from '../apis/search';

/**
 * @desc get category from api
 * @returns {Object, function} - product object, function for handle pagination
 */
const useSearch = (q) => {
  /** Hook */
  const [page, setPage] = useState(1);
  const [pageApi, setPageApi] = useState({});
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('run use custom hook');
    (async () => {
      try {
        const response = await searchApi.get('/', {
          params: {
            q,
            limit: 32,
            page,
          },
        });
        setPageApi(response.data.paging);
        const { data } = response.data;
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [page, q]);

  return [loading, products, pageApi, page, setPage];
};

export default useSearch;
