import React from 'react';

/** Material ui */
import { Box, Drawer, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

/** Style component */
const useStyles = makeStyles({
  icon: {
    fontSize: '2rem',
    color: 'white',
  },
  box: {
    marginLeft: '1rem',
  },
});
const Menu = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [openAnchor, setOpenAnchor] = React.useState(false);

  return (
    <Box className={classes.box}>
      <IconButton onClick={() => setOpenAnchor(true)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
      <Drawer
        anchor="left"
        open={openAnchor}
        onClose={() => setOpenAnchor(false)}
      >
        Hello
      </Drawer>
    </Box>
  );
};

/** Export */
export default Menu;
