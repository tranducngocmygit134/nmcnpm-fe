import { lazy } from 'react';

const route = {
  path: '/users/active/:user_id',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
