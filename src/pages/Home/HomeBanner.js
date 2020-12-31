import React from 'react';

/** Material ui*/
import { Grid } from '@material-ui/core';
const HomeBanner = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <img
          src="/images/home-banner/1.png"
          alt="home banner"
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={3}>
        <img
          src="/images/home-banner/2.png"
          alt="home banner"
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={3}>
        <img
          src="/images/home-banner/3.png"
          alt="home banner"
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={3}>
        <img
          src="/images/home-banner/4.png"
          alt="home banner"
          style={{ width: '100%' }}
        />
      </Grid>
    </Grid>
  );
};

/** Export */
export default HomeBanner;
