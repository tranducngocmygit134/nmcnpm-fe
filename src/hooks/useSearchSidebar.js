import { useState, useEffect } from 'react';
/** Api */
import searchApi from '../apis/search';

const useCategorySidebar = (query) => {
  /** Hooks */
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    console.log('run use custom hook');
    (async () => {
      const response = await searchApi.get('/', {
        params: { q: query },
      });
      let { filters } = response.data;
      filters = filters.map((item) => {
        let values = item.values;
        /** Filter brand GIÁ, content must not be display, but brand is required */
        if (item.display_name.toUpperCase() === 'GIÁ') {
          values = [{ display_value: 'GIÁ' }];
        }
        return {
          display_name: item.display_name,
          values,
        };
      });
      /** Filter brand, these brand must not be display */
      filters = filters.filter((item) => {
        return (
          item.display_name.toUpperCase() !== 'GIAO HÀNG NHANH 2H' &&
          item.display_name.toUpperCase() !== 'SẢN PHẨM ĐƯỢC GIAO TỪ'
        );
      });
      setBrands(filters);
    })();
  }, [query]);

  return [brands];
};

export default useCategorySidebar;
