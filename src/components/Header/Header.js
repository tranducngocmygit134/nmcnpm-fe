import React from 'react';

/** Material ui */
import { AppBar, Hidden, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Center layout */
import CenterComponent from '../layout/CenterLayout';

/** Child component */
import TopHeader from './Top';
import BottomHeader from './Bottom';

/** Style component */
const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    flexWrap: 'wrap',
  },
  appBar: {
    boxShadow: 'none',
  },
}));

const Header = () => {
  /** Instance of style */
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="sticky" className={classes.appBar}>
        <CenterComponent mt="0">
          <Toolbar classes={{ root: classes.toolbarRoot }} disableGutters>
            <TopHeader />
            {/* If width screen is less than 1280px, hidden bottom content */}
            <Hidden mdDown>
              <BottomHeader />
            </Hidden>
          </Toolbar>
        </CenterComponent>
      </AppBar>
    </Box>
  );
};

export default Header;
