import { useState, useEffect } from 'react';

import productApi from '../apis/product';

const useProduct = (product_id) => {
  /** Hook */
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('run use custom hook');
    (async () => {
      try {
        const response = await productApi.get(`/${product_id}`);
        let product = response.data.data;

        setProduct(product);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [product_id]);

  return [product, loading];
};

export default useProduct;
