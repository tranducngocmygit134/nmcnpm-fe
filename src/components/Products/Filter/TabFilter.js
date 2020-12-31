import React, { useState } from 'react';

/** Material ui */
import { Tabs, Tab, Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

/** Style component */
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderBottom: '1px solid #e0e0e0',
    alignItems: 'center',
    padding: `0 ${theme.spacing(2)}px`,
  },
  search: {
    height: '100%',
    width: '100%',
    paddingLeft: theme.spacing(1),
    outline: 'none',
    border: '1px solid #bdbdbd',
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(239, 239, 239)',
    padding: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    border: '1px solid #bdbdbd',
  },
  tab: {
    '@media (min-width: 600px)': {
      minWidth: 0,
    },
  },
}));

/** Data */
const labels = [
  'HÀNG MỚI',
  'BÁN CHẠY',
  'GIẢM GIÁ NHIỀU',
  'GIÁ THẤP',
  'GIÁ CAO',
  'CHỌN LỌC',
];

const TabFilter = () => {
  /** Style component*/
  const classes = useStyles();
  /** Hook */
  const [value, setValue] = useState(0);
  return (
    <Grid item container className={classes.mainContainer}>
      <Typography variant="body2">Ưu tiên xem: </Typography>

      {/* Navigation Tabs */}
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        aria-label="products filter"
        onChange={(_, value) => setValue(value)}
        style={{ margin: '0 10px' }}
      >
        {labels.map((label) => (
          <Tab label={label} key={label} classes={{ root: classes.tab }} />
        ))}
      </Tabs>

      {/* Search box */}
      <Box style={{ display: 'flex', flexGrow: 1 }}>
        <Box style={{ flexGrow: 1 }}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className={classes.search}
          />
        </Box>
        <Box className={classes.searchIcon}>
          <SearchIcon />
        </Box>
      </Box>
    </Grid>
  );
};

/** Export */
export default TabFilter;
