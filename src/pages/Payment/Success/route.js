import { lazy } from 'react';

const route = {
  path: '/payment/success',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
