import React, { useState } from 'react';

/** Navigate using react-router-dom*/
import { Link } from 'react-router-dom';

/** Material ui */
import { Box, Popper, Fade, Paper, ClickAwayListener } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Component */
import Icon from '../Icon';

/** Data */
import { categoryTab } from '../../pages/Home/data';
import CategoryContent from './CategoryContent';
import megamenuData from './data';

const Tab = ({
  link,
  position,
  width,
  height,
  label,
  category,
  onMouseOver,
  index,
}) => {
  return (
    <Link
      to={link}
      style={{
        display: 'flex',
        alignItems: 'center',

        textDecoration: 'none',
        fontSize: '0.85rem',
        padding: '8px 0',
      }}
      className={category}
      onMouseOver={(e) => onMouseOver(e, index)}
    >
      <Icon
        link={link}
        position={position}
        width={width}
        height={height}
        wrapWidth="40px"
      />
      <span style={{ pointerEvents: 'none' }}>{label}</span>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
    border: '1px solid #e0e0e0',
    width: 320,
    backgroundColor: 'white',
  },
  category: {
    color: 'rgb(51, 51, 51)',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
  paper: {
    width: 1019,
    borderRadius: 0,
    border: '1px solid #e0e0e0',
  },
}));
const Categories = ({ popperOpen, setPopperOpen, type }) => {
  /** Style component */
  const classes = useStyles();

  /** Hook */
  const [categoryContent] = useState(megamenuData);
  const [categoryIndex, setCategoryIndex] = useState(0);

  /** Effect only run in componentDidMount phase */
  /**
   * @desc display details content of Tab ( attach to Banner area ) when user hover
   * @param {Number} index - index of Tabs arrage [0-15]
   */
  const handlePopperOpen = (_, index) => {
    setPopperOpen(true);
    setCategoryIndex(index);
  };

  /**
   * @desc remove content of Tab when user hover
   */
  const handlePopperClose = () => {
    setPopperOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => handlePopperClose()}>
        <Box className={classes.box} id={type}>
          {categoryContent.length > 0 && (
            <Popper
              open={popperOpen}
              anchorEl={document.getElementById(type)}
              placement="right-start"
              transition
              style={{ zIndex: 1300 }}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper
                    className={classes.paper}
                    elevation={0}
                    style={{
                      height: document.getElementById(type).clientHeight + 2,
                    }}
                  >
                    <CategoryContent
                      categoryContent={categoryContent}
                      categoryIndex={categoryIndex}
                    />
                  </Paper>
                </Fade>
              )}
            </Popper>
          )}

          {categoryTab.map((el, index) => (
            <Tab
              key={index}
              link={el.link}
              position={el.position}
              width={el.width}
              height={el.height}
              label={el.label}
              category={classes.category}
              index={index}
              onMouseOver={handlePopperOpen}
            />
          ))}
        </Box>
      </ClickAwayListener>
    </>
  );
};

export default Categories;
