import { lazy } from 'react';

const route = {
  path: '/payment/user/tracking',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
