import React, { useState } from 'react';

/** Material Ui */
import { Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Navigation */
import { useHistory, useLocation } from 'react-router-dom';

/** Function */
import filterProduct from '../utils/filterProduct';

/** Styles */
const useStyles = makeStyles((theme) => ({
  subtractIcon: {
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.spacing(1)}px`,
    '& > span': {
      width: 5,
      height: 1,
      backgroundColor: '#bdbdbd',
      display: 'inline-block',
    },
  },
  textField: {
    '& .MuiInputBase-root': {
      height: theme.spacing(4),
      width: theme.spacing(12),
    },
  },
  button: {
    height: theme.spacing(4),
    width: theme.spacing(12),
    marginTop: theme.spacing(1),
  },
}));

const PriceFilter = () => {
  const classes = useStyles();

  /** Hook */
  const location = useLocation();
  const history = useHistory();
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  function handlePriceMin(e) {
    if (!isNaN(e.target.value)) {
      setMin(e.target.value);
    }
  }
  function handlePriceMax(e) {
    if (!isNaN(e.target.value)) {
      setMax(e.target.value);
    }
  }
  function handleFilterPrice(name) {
    let { search, pathname } = location;
    const value = `${Math.min(min, max)}%2C${Math.max(min, max)}`;

    search = filterProduct(name, value, search);
    history.push(`${pathname}?${search}`);
  }

  return (
    <>
      <Box style={{ display: 'flex' }}>
        <TextField
          variant="outlined"
          value={min}
          onChange={(e) => handlePriceMin(e)}
          className={classes.textField}
        />
        <Box className={classes.subtractIcon}>
          <span />
        </Box>
        <TextField
          variant="outlined"
          value={max}
          onChange={handlePriceMax}
          className={classes.textField}
        />
      </Box>
      <Button
        color="primary"
        variant="outlined"
        className={classes.button}
        onClick={() => handleFilterPrice('price')}
      >
        OK
      </Button>
    </>
  );
};

export default PriceFilter;
