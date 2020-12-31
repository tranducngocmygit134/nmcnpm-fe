import { lazy } from 'react';

const route = {
  path: '/users/signup',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
