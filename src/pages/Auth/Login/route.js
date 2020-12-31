import { lazy } from 'react';

const route = {
  path: '/users/login',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
