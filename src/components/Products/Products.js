import React from 'react';

/** Material ui*/
import { Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

/** Component */
import Card from '../../components/Card';
import TabFilter from './Filter/TabFilter';
// import Loading from '../../components/utils/Loading';

/** Style component */
const useStyles = makeStyles({
  mainTypo: {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    color: '#616161',
    margin: '1rem 0 0 1rem',
  },
  paging: {
    justifyContent: 'flex-end',
    padding: '30px 20px',
  },
  tab: {
    borderBottom: '1px solid #e0e0e0',
    alignItems: 'center',
    padding: '0 20px',
  },
});

const Products = ({ productsData }) => {
  const [products, pageApi, page, setPage] = productsData;
  /** Style component*/
  const classes = useStyles();

  // if (!products) {
  //   return <Loading type="page" />;
  // }

  return (
    <Grid container style={{ backgroundColor: 'white' }} direction="column">
      {/* Header */}
      {pageApi && (
        <>
          <Grid item>
            <Typography vairant="h1" className={classes.mainTypo}>
              Tìm kiếm được: {pageApi.total} kết quả
            </Typography>
          </Grid>
          {/* Tab navigation */}
          <TabFilter />
        </>
      )}

      {/* Products */}
      <Grid item container style={{ paddingBottom: 5 }}>
        {products.length
          ? products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={`${product.id} ${index}`}>
                <Card product={product} />
              </Grid>
            ))
          : Array.from(Array(8).keys()).map((el, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card product="" />
              </Grid>
            ))}
      </Grid>

      {/* Pagination  */}
      {page && (
        <Grid container item className={classes.paging}>
          <Pagination
            count={12}
            color="primary"
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </Grid>
      )}
    </Grid>
  );
};

/** Export */
export default Products;
