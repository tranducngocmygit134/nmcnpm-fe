import React from 'react';

/** Custom hook */
import useProduct from '../../hooks/useProduct';
import useComment from '../../hooks/useComment';

/** Material ui*/
import { Grid } from '@material-ui/core';

/** Query */
import { useParams } from 'react-router-dom';

/** Component */
import CenterComponent from '../../components/layout/CenterLayout';
import ProductOverview from './ProductOverview';
import DetailInfo from './DetailInfo';
import Comments from './Comments';
import Loading from '../../components/utils/Loading';

const ProductDetails = () => {
  /** Query */
  const { product_id } = useParams();

  /** Hook */
  const [comments, setLimitComments, commentLoading] = useComment(product_id);
  const [product, productLoading] = useProduct(product_id);

  if (productLoading || commentLoading) {
    return <Loading type="page" />;
  }

  return (
    <CenterComponent>
      <Grid container direction="column">
        <ProductOverview product={product} />
        <DetailInfo specifications={product.specifications} />
        <Comments
          comments={comments}
          setLimit={setLimitComments}
          loading={commentLoading}
          product_id={product_id}
        />
      </Grid>
    </CenterComponent>
  );
};

/** Export */
export default ProductDetails;
