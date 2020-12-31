import { lazy } from 'react';

const route = {
  path: '/products/search',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
