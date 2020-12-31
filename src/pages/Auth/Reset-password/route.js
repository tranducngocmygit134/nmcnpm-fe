import { lazy } from 'react';

const route = {
  path: '/users/reset-password/:token',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
