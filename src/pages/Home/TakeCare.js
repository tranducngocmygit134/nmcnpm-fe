import React, { useState } from 'react';

/** Material ui */
import { Box, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

/** Navigation */
import { Link } from 'react-router-dom';
import { takeCare } from './data';

/** Style component */
const useStyles = makeStyles({
  img: {
    width: 96,
    height: 96,
  },
  img__box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: '15px',

    textDecoration: 'none',

    width: 188,
    height: 175,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  typo: {
    marginTop: 10,
  },
  arrowLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  arrow: {
    fontSize: '1rem',
  },
});
const TakeCare = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [products] = useState(takeCare);
  const [page, setPage] = useState(1);
  return (
    <>
      <Box mb={1}>
        <Typography variant="h1">NGÀNH HÀNG QUAN TÂM </Typography>
      </Box>
      <Box className={classes.box}>
        <IconButton
          className={classes.arrowLeft}
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          <ArrowBackIosRoundedIcon className={classes.arrow} />
        </IconButton>
        {products.map((product, item) => {
          if (item >= (page - 1) * 6 && item < page * 6) {
            return (
              <Box
                className={classes.img__box}
                key={product.id}
                component={Link}
                to={`/products/search?q=${product.name}`}
              >
                <img
                  src={product.thumbnail_url}
                  alt={product.name}
                  className={classes.img}
                />
                <Typography
                  variant="subtitle2"
                  align="center"
                  className={classes.typo}
                >
                  {product.name}
                </Typography>
              </Box>
            );
          } else {
            return undefined;
          }
        })}
        <IconButton
          className={classes.arrowRight}
          onClick={() => setPage((prev) => prev + 1)}
          disabled={(page + 1) * 6 > products.length}
        >
          <ArrowForwardIosRoundedIcon className={classes.arrow} />
        </IconButton>
      </Box>
    </>
  );
};

/** Export */
export default TakeCare;
