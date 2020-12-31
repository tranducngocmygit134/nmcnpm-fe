import { lazy } from 'react';

const route = {
  path: '/users/update-password',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
