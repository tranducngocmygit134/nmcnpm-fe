import React from 'react';

/* Material ui*/
import { Grid } from '@material-ui/core';

const CategoryBanner = () => {
  return (
    <Grid container direction="row" style={{ width: '100%' }}>
      <Grid
        item
        container
        direction="column"
        xs={7}
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Grid item container>
          <img src="/images/home-banner/5.png" alt="banner" />
        </Grid>
        <Grid item container>
          <Grid item xs={6} style={{ width: 298, height: 184 }}>
            <img
              src="/images/home-banner/6.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={6} style={{ width: 298, height: 194 }}>
            <img
              src="/images/home-banner/7.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        xs={5}
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Grid item container>
          <Grid item xs={6} style={{ with: 207, height: 185 }}>
            <img
              src="/images/home-banner/8.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={6} style={{ with: 207, height: 185 }}>
            <img
              src="/images/home-banner/9.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6} style={{ with: 207, height: 185 }}>
            <img
              src="/images/home-banner/10.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={6} style={{ with: 207, height: 185 }}>
            <img
              src="/images/home-banner/11.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6} style={{ with: 207, height: 185 }}>
            <img
              src="/images/home-banner/12.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={6} style={{ with: 207, height: 185 }}>
            <img
              src="/images/home-banner/13.png"
              alt="banner"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

/** Export */
export default CategoryBanner;
