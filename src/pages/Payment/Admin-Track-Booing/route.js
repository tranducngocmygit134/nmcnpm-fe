import { lazy } from 'react';

const route = {
  path: '/payment/admin',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
