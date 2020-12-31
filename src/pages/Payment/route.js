import { lazy } from 'react';

const route = {
  path: '/users/payment/:product_id',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
