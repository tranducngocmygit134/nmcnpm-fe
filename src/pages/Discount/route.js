import { lazy } from 'react';

const route = {
  path: '/discount',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
