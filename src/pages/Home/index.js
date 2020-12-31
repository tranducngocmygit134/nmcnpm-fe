import React, { useState } from 'react';

/** Material ui */
import { Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Components */
import CenterLayout from '../../components/layout/CenterLayout';
import Categories from '../../components/Categories';
import CategoryBanner from './CategoryBanner';
import HomeBanner from './HomeBanner';
import Discount from './Discount';
import TakeCare from './TakeCare';
import OnlyYou from './OnlyYou';
import HotKey from './HotKey';

/** Style component*/
const useStyles = makeStyles({
  box: {
    display: 'flex',
  },
  section: {
    marginTop: '2rem',
  },
});
const Home = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hooks */
  const [popperOpen, setPopperOpen] = useState(false);

  return (
    <CenterLayout>
      <Hidden mdDown>
        <Box className={classes.box}>
          <Categories
            popperOpen={popperOpen}
            setPopperOpen={setPopperOpen}
            type="home"
          />
          <CategoryBanner />
        </Box>
      </Hidden>
      <Hidden mdDown>
        <Box mt={5}>
          <HomeBanner />
        </Box>
      </Hidden>
      <Box mt={5}>
        <Discount />
      </Box>
      <Hidden mdDown>
        <Box className={classes.section}>
          <TakeCare />
        </Box>
      </Hidden>
      <Hidden mdDown>
        <Box className={classes.section}>
          <HotKey />
        </Box>
      </Hidden>
      <Box className={classes.section}>
        <OnlyYou />
      </Box>
    </CenterLayout>
  );
};

export default Home;
