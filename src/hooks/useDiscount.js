import { useState, useEffect } from 'react';

/** Api */
import discountApi from '../apis/discount';

const useDiscount = () => {
  /** Hooks */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log('run use custom hook');
      try {
        const response = await discountApi.get('/');

        let { data } = response.data;
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return [products, loading];
};

/** Export */
export default useDiscount;
