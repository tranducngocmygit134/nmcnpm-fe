import React, { useState } from 'react';

/** Material ui*/
import { Grid, Typography, Box, Button, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

/** Navigation */
import { useHistory, useLocation } from 'react-router-dom';

/** Function */
import filterProduct from './utils/filterProduct';

/** Components */
import PriceFilter from './Filter/PriceFilter';
import RatingFilter from './Filter/RatingFilter';

/** Styles */
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    borderBottom: '1px solid #f5f5f5',
  },
  sidebarTitle: { marginBottom: theme.spacing(1), textTransform: 'uppercase' },
  typo: {
    width: theme.spacing(28),
    display: 'block',
    textDecoration: 'none',
    color: theme.common.text,
    cursor: 'pointer',
  },
}));

const SidebarItem = ({ sidebarItem }) => {
  /** Style component*/
  const classes = useStyles();
  /** Hook */
  const [itemCollapse, setItemCollapse] = useState(true);
  const history = useHistory();
  const location = useLocation();

  const handleQuery = (name, value) => {
    let { pathname, search } = location;
    search = filterProduct(name, value, search);
    history.push(`${pathname}?${search}`);
  };

  const Item = (item, query_name) => (
    <Typography
      variant="subtitle2"
      key={item.display_value}
      className={classes.typo}
      onClick={() => handleQuery(query_name, item.query_value)}
    >
      {item.display_value} &nbsp;({item.count})
    </Typography>
  );

  return (
    <Grid item className={classes.mainContainer}>
      {/* Title of sidebar */}
      <Typography variant="h2" className={classes.sidebarTitle}>
        {sidebarItem.display_name}
      </Typography>

      {sidebarItem.values.map((item, index) => {
        // brand content default (not collapse)
        if (index <= 10) {
          if (sidebarItem.display_name.toUpperCase() === 'GIÁ') {
            return (
              <Box key={item.display_value}>
                <PriceFilter />
              </Box>
            );
          } else if (sidebarItem.display_name.toUpperCase() === 'ĐÁNH GIÁ') {
            return <RatingFilter item={item} key={index} />;
          } else {
            return Item(item, sidebarItem.query_name);
          }
        } else {
          return undefined;
        }
      })}
      {sidebarItem.values.length > 11 && (
        <Button
          endIcon={
            itemCollapse === true ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )
          }
          onClick={() => setItemCollapse(!itemCollapse)}
          fullWidth
          style={{ fontWeight: 'bold' }}
        >
          {itemCollapse === true ? 'Xem thêm' : 'Thu gọn'}
        </Button>
      )}
      <Collapse in={!itemCollapse}>
        {sidebarItem.values.map((item, index) => {
          if (index > 10) {
            return Item(item, sidebarItem.query_name);
          } else {
            return undefined;
          }
        })}
      </Collapse>
    </Grid>
  );
};

/** Export */
export default SidebarItem;
