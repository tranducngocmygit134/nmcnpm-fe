import React, { useEffect, useState } from 'react';
import authApi from '../../../apis/auth';
import Products from '../../../components/Products/Products';
import { useDispatch } from 'react-redux';
import Snack from '../../../components/Snack';
import { errorMessage } from '../../../redux/actions/snack';
import CenterLayout from '../../../components/layout/CenterLayout';
import { Typography } from '@material-ui/core';

const PaymentSuccess = () => {
  const [products, setProducts] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Effect run');
    (async () => {
      try {
        const res = await authApi.get('/payment/success');
        setProducts(res.data.data.products);
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch(errorMessage(message));
      }
    })();
  }, [dispatch]);

  return (
    <CenterLayout>
      <Typography
        variant="h1"
        style={{ margin: '20px 0px 10px 0px', display: 'block' }}
      >
        Sản phẩm đã thanh toán
      </Typography>
      <Snack />
      <Products productsData={[products]} />
    </CenterLayout>
  );
};

export default PaymentSuccess;
