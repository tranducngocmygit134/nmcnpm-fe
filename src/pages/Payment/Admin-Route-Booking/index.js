import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import CenterLayout from '../../../components/layout/CenterLayout';
import Step from './step';

const Track = () => {
  const { search } = useLocation();
  const thumbnail_url = search.split('?')[1].split('=')[1];

  return (
    <CenterLayout mw="sm">
      <Typography
        variant="h1"
        style={{
          display: 'block',
          margin: '20px 0 10px 0',
          fontSize: 30,
          fontWeight: 'bold',
          color: '#757575',
        }}
      >
        Admin tracking
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <img
            src={thumbnail_url.replace(/280x280/, '600x600')}
            alt="Product thumbnail"
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Step />
        </Grid>
      </Grid>
    </CenterLayout>
  );
};

export default Track;
