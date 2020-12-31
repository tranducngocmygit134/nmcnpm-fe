import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import authApi from '../../apis/auth';

import Loading from '../../components/utils/Loading';

const ActiveUser = () => {
  const { product_id } = useParams();
  const history = useHistory();
  useEffect(() => {
    authApi
      .post(`/payment/${product_id}`)
      .then((res) => {
        history.push(`/payment?status=success`);
      })
      .catch((error) => {
        history.push(`/payment?status=fail`);
      });
  });

  return <Loading type="page" />;
};

export default ActiveUser;
