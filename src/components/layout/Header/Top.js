import React from 'react';

/** Material ui */
import { Box, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

/** Navigate using react-router-dom */

/** Components */
import Search from './Search';
import Cart from './Cart';
import Menu from './Menu';

/** Style component */
const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    height: 70,
    width: '100%',
  },
}));

const TopHeader = () => {
  /** Instance of makeStyles */
  const classes = useStyles();
  /** Instance of theme */
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.box}>
      <Search />
      {matchMdDown ? <Menu /> : <Cart />}
    </Box>
  );
};

/** Export */
export default TopHeader;
