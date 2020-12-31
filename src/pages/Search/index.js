import React from 'react';

/** Router */
import { useLocation } from 'react-router-dom';

/** Hook */
import useSearchSidebar from '../../hooks/useSearchSidebar';
import useSearch from '../../hooks/useSearch';

/** Component */
import Products from '../../components/Products';
import Loading from '../../components/utils/Loading';

const Search = () => {
  /** Style component*/
  const query = useLocation().search.split('?')[1];

  /** Hook */
  const [brands] = useSearchSidebar(query);
  /**
   * @desc get products buy category, rerun when page or query is changed
   */
  const [loading, ...productsData] = useSearch(query);

  if (loading) {
    return <Loading type="page" />;
  }

  return <Products sidebar={brands} productsData={productsData} />;
};

/** Export */
export default Search;
