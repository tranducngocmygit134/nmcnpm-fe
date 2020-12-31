import React from 'react';

/** Hooks */
import { useSelector } from 'react-redux';

import Sidebar from './Sidebar';
import CenterLayout from '../../../components/layout/CenterLayout';
import EditProfile from './EditProfile';
import { Grid } from '@material-ui/core';
import Error from '../../../components/Error';

function UserProfile() {
  const { isSignedIn, user } = useSelector((state) => state.auth);

  if (!isSignedIn) {
    return <Error statusCode={401} message={`Please login to continue`} />;
  }
  return (
    <CenterLayout>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar user={user} />
        </Grid>
        <Grid item xs={9}>
          <EditProfile user={user} />
        </Grid>
      </Grid>
    </CenterLayout>
  );
}

export default UserProfile;
