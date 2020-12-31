import React from 'react';

/** Material ui*/
import { Box, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Components */
import CardComponent from '../../components/Card';
import SockPrice from '../../components/utils/SockPrice';
import CenterComponent from '../../components/layout/CenterLayout';
import Icons from './Icons';

/** Hooks */
import useDiscount from '../../hooks/useDiscount';

/** Style component*/
const useStyles = makeStyles({
  button: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  mainHeader: {
    padding: '2rem 1.5rem',
    justifyContent: 'center',
  },
  cardContainer: {
    width: 240,
    margin: '0 auto',
  },
  mainCard: {
    padding: '10px 0',
  },
  divider: {
    backgroundColor: 'blue',
    height: 2,
  },
});
const Discount = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [products] = useDiscount();

  return (
    <CenterComponent>
      <Grid container direction="column" style={{ backgroundColor: 'white' }}>
        <Grid item container className={classes.mainHeader}>
          <SockPrice />
        </Grid>
        <Hidden mdDown>
          <Box className={classes.divider} />
        </Hidden>
        <Hidden mdDown>
          <Grid item container style={{ margin: '20px 0' }}>
            <Icons />
          </Grid>
        </Hidden>
        <Grid item container className={classes.mainCard}>
          {products.length !== 0
            ? products.map((product) => (
                <Grid item className={classes.cardContainer} key={product.id}>
                  <CardComponent discount={true} product={product} />
                </Grid>
              ))
            : Array.from(Array(10).keys()).map((_, index) => (
                <Grid item className={classes.cardContainer} key={index}>
                  <CardComponent discount={true} product={null} />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </CenterComponent>
  );
};

/** Export */
export default Discount;
