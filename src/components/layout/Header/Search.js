import React, { useState } from 'react';

/** Hooks */
import useSuggestion from '../../../hooks/useSuggestion';

/** Material ui */
import {
  Box,
  Button,
  Hidden,
  Popper,
  List,
  ListItem,
  ListItemText,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

/** Navigation using react-router-dom */
import { Link, useHistory } from 'react-router-dom';

/** Components */
import Icon from '../../Icon';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    width: '100%',
  },
  input: {
    padding: '10.4px 10px',
    outline: 'none',
    border: 'none',
    flexGrow: 1,
    '&::placeholder': {
      color: '#9e9e9e',
    },
  },
  startIcon: {
    marginRight: 3,
  },
  button: {
    textTransform: 'capitalize',

    borderRadius: 0,
    padding: '6px 10px 6px 16px',
  },
});
const Search = () => {
  /** Style */
  const classes = useStyles();

  /** Hook */
  const [query, setQuery] = useState('');
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);
  const history = useHistory();
  const [suggestions] = useSuggestion(query);

  const handleQuery = (e) => {
    e.preventDefault();
    if (query !== '') {
      history.push(`/products/search?q=${query}`);
      setSearchAnchorEl(null);
      setQuery('');
    }
  };
  return (
    <Box className={classes.box}>
      <Link to="/">
        <Icon link="/" position="-148px 0px" width="50px" height="33px" />
      </Link>
      <Hidden smDown>
        <Link to="/tikinow">
          <img
            src="https://salt.tikicdn.com/ts/banner/33/ba/89/54c02d2475983f93a024c0cd13f238e4.png"
            alt="thử ngay tiki now"
            style={{ height: 33, marginLeft: 3 }}
          />
        </Link>
        <Box style={{ width: '100%' }} ml={1.4}>
          <form
            onSubmit={handleQuery}
            className={classes.box}
            style={{ width: '100%' }}
          >
            <input
              type="text"
              className={classes.input}
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value !== '') {
                  setSearchAnchorEl(e.currentTarget);
                } else {
                  setSearchAnchorEl(null);
                }
              }}
            />
            <Button
              startIcon={<SearchIcon />}
              variant="contained"
              disableElevation
              disableRipple
              className={classes.button}
              classes={{ startIcon: classes.startIcon }}
              onClick={handleQuery}
            >
              Tìm kiếm
            </Button>
          </form>
          <Popper
            open={Boolean(searchAnchorEl)}
            anchorEl={searchAnchorEl}
            placement="bottom-start"
            style={{ zIndex: 10000, marginTop: 10 }}
          >
            <ClickAwayListener onClickAway={() => setSearchAnchorEl(null)}>
              <Paper>
                <List
                  style={{
                    width: 509,
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 5,
                  }}
                >
                  {suggestions.map((el) => (
                    <ListItem
                      button
                      onClick={(e) => {
                        setQuery(el.keyword);
                        setSearchAnchorEl(null);
                      }}
                      key={el.keyword}
                    >
                      <ListItemText>{el.keyword}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </ClickAwayListener>
          </Popper>
        </Box>
      </Hidden>
    </Box>
  );
};

/** Export */
export default Search;
