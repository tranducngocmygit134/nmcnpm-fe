import { lazy } from 'react';

const route = {
  path: '/payment/admin/tracking/:booking_id',
  exact: true,
  public: true,
  component: lazy(() => import('.')),
};

export default route;
