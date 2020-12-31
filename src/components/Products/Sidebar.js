import React from 'react';

/** Material ui */
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Component */
import SidebarItem from './SidebarItem';

/** Style component*/
const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: theme.common.brandWidth,
    backgroundColor: 'white',
    borderRight: '1px solid #eee',
  },
}));

const Sidebar = ({ sidebar }) => {
  /** Style component */
  const classes = useStyles();

  /**
   * @desc get sidebar infomation, rerun when query is changed
   * @param {Number} category - category id
   * @return {Array} all brands
   */

  return (
    <Grid container direction="column" className={classes.sidebar}>
      {sidebar.map((item) => (
        <SidebarItem sidebarItem={item} key={item.display_name} />
      ))}
    </Grid>
  );
};

/** Export */
export default Sidebar;
