import { lazy } from 'react';

const route = {
  path: '/users/profile',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
