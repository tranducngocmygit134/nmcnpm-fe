import React from 'react';

/** Material ui */
import { Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Component */
import Sidebar from './Sidebar';
import CenterComponent from '../layout/CenterLayout';
import Products from './Products';

/** Style component*/
const useStyles = makeStyles(() => ({
  box: {
    width: '100%',
    display: 'flex',
  },
}));
const Category = ({ sidebar, productsData }) => {
  /** Style component*/
  const classes = useStyles();

  return (
    <CenterComponent>
      <Box className={classes.box}>
        <Hidden mdDown>
          <Sidebar sidebar={sidebar} />
        </Hidden>
        <Products productsData={productsData} />
      </Box>
    </CenterComponent>
  );
};

/** Export */
export default Category;
