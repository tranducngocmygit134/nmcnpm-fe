import React from 'react';

/** Custom hook */
import useDiscount from '../../hooks/useDiscount';

/** Material ui*/
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/** Navigation */
import { Link } from 'react-router-dom';

/** Components */
import Card from '../../components/Card';
import SockPrice from '../../components/utils/SockPrice';

/** Style component*/
const useStyles = makeStyles({
  button: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  mainHeader: {
    padding: '1rem 1.5rem',
  },
  cardContainer: {
    width: 240,
    margin: '0 auto',
  },
  cardArea: {
    borderTop: '1px solid #eeeeee',
  },
});
const Discount = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [products] = useDiscount();

  return (
    <Grid container style={{ backgroundColor: 'white' }}>
      <Grid item container alignItems="center" className={classes.mainHeader}>
        <Grid item>
          <SockPrice />
        </Grid>
        <Grid item style={{ marginLeft: 'auto' }}>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            color="primary"
            className={classes.button}
            size="small"
            disableRipple
          >
            Xem Tất Cả
          </Button>
        </Grid>
      </Grid>
      <Grid item container className={classes.cardArea}>
        {products.length !== 0
          ? products.map((el, index) => {
              if (index < 10) {
                return (
                  <Grid item className={classes.cardContainer} key={el.id}>
                    <Card discount={true} product={el} />
                  </Grid>
                );
              }
              return null;
            })
          : Array.from(Array(10).keys()).map((el, index) => (
              <Grid item className={classes.cardContainer} key={index}>
                <Card discount={true} product={null} />
              </Grid>
            ))}
      </Grid>
      <Grid
        item
        container
        style={{ justifyContent: 'center', margin: '1rem 0 1.5rem 0' }}
      >
        <Button
          variant="outlined"
          color="primary"
          style={{ padding: '2px 50px' }}
          component={Link}
          to="/discount"
        >
          Xem thêm
        </Button>
      </Grid>
    </Grid>
  );
};

/** Export */
export default Discount;
