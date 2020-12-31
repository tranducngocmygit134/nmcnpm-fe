import React from 'react';

/** Router */
import { useLocation } from 'react-router-dom';

/** Component */
import Products from '../../components/Products';

/** Hook */
import useCategorySidebar from '../../hooks/useCategorySidebar';
import useCategory from '../../hooks/useCategory';

const Category = () => {
  /** Style component*/
  const query = useLocation().search;

  /** Hook */
  const [sidebar] = useCategorySidebar(query);
  /**
   * @desc get products buy category, rerun when page or query is changed
   */
  const productsData = useCategory(query);

  return <Products sidebar={sidebar} productsData={productsData} />;
};

/** Export */
export default Category;
