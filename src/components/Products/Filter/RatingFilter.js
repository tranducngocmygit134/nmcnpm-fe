import React from 'react';

/** Material ui*/
import { Typography, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

/** Navigation */
import { useHistory, useLocation } from 'react-router-dom';

/** Function */
import filterProduct from '../utils/filterProduct';

const RatingFilter = ({ item }) => {
  /** Hook */
  const location = useLocation();
  const history = useHistory();

  const handleFilterRating = (name, value) => {
    let { pathname, search } = location;
    search = filterProduct(name, value, search);
    history.push(`${pathname}?${search}`);
  };
  return (
    <Box
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={() => handleFilterRating('rating', item.query_value)}
    >
      <Rating name="read-only" value={item.query_value * 1} readOnly />
      <Typography variant="subtitle2">&nbsp;({item.display_value})</Typography>
    </Box>
  );
};

/** Export */
export default RatingFilter;
