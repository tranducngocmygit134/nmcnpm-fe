import { lazy } from 'react';

const route = {
  path: '/users/logout',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
