import { lazy } from 'react';

const route = {
  path: '/users/forgot-password',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
