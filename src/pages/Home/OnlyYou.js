import React from 'react';

/** Custom hook */
import useOnlyYou from '../../hooks/useOnlyYou';

/** Material ui */
import { Typography, Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Navigation */

/** Components */
import Card from '../../components/Card';

/** Style component */
const useStyles = makeStyles({
  mainHeader: {
    padding: '1rem 1.5rem',
  },
  cardContainer: {
    width: 240,
    margin: '0 auto',
  },
});
const TakeCare = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [products, page, setPage] = useOnlyYou();

  return (
    <>
      <Box mb={1}>
        <Typography variant="h1">DÀNH RIÊNG CHO BẠN</Typography>
      </Box>
      <Grid container style={{ backgroundColor: 'white', paddingTop: 2 }}>
        <Grid item container>
          {products.length === page * 10
            ? products.map((product, index) => (
                <Grid item className={classes.cardContainer} key={product.id}>
                  <Card product={product} />
                </Grid>
              ))
            : Array.from(Array(10).keys()).map((_, index) => {
                return (
                  <Grid item className={classes.cardContainer} key={index}>
                    <Card product={null} />
                  </Grid>
                );
              })}
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
            onClick={() => setPage((prev) => prev + 1)}
          >
            Xem thêm
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

/** Export */
export default TakeCare;
