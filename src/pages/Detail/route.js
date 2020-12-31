import { lazy } from 'react';

const route = {
  path: '/products/:product_id',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
