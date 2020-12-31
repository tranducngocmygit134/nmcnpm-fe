import React, { useState } from 'react';

/** Material ui */
import { Typography, Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

/** Navigation */
import { Link } from 'react-router-dom';

/** Data */
import { hotkey } from './data';

/** Style component */
const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-between',

    position: 'relative',
  },
  key__box: {
    width: 180,
    height: 65,
    borderRadius: 5,
    color: 'white',
    userSelect: 'none',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    left: 0,
  },
  iconButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    padding: 8,

    backgroundColor: '#e0e0e0',
    opacity: 0.7,
    '&:hover': {
      backgroundColor: '#e0e0e0',
      opacity: 0.7,
    },
  },
  arrowRight: {
    right: 0,
  },
  arrow: {
    fontSize: '1rem',
  },
});

const HotKey = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [page, setPage] = useState(1);

  return (
    <>
      <Box mb={1}>
        <Typography variant="h1">TỪ KHÓA HOT</Typography>
      </Box>
      <Box className={classes.box}>
        <IconButton
          className={`${classes.arrowLeft} ${classes.iconButton}`}
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
        >
          <ArrowBackIosRoundedIcon className={classes.arrow} />
        </IconButton>
        {hotkey.map((el, index) => {
          if (index >= (page - 1) * 6 && index <= page * 6 - 1) {
            return (
              <Box
                className={classes.key__box}
                key={el.keyword}
                style={{
                  backgroundColor: el.background,
                  textDecoration: 'none',
                }}
                component={Link}
                to={`/products/search?q=${el.keyword}`}
              >
                {el.keyword}
              </Box>
            );
          } else {
            return undefined;
          }
        })}
        <IconButton
          className={`${classes.arrowRight} ${classes.iconButton}`}
          onClick={() => setPage(page + 1)}
          disabled={(page + 1) * 6 >= hotkey.length}
        >
          <ArrowForwardIosRoundedIcon className={classes.arrow} />
        </IconButton>
      </Box>
    </>
  );
};

/** Export */
export default HotKey;
