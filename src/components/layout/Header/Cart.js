import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import authApi from '../../../apis/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/auth';

/** Material ui */
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

/** Navigation */
import { Link } from 'react-router-dom';

/** Components */
import Icon from '../../Icon';

/** Tab component */
const Tab = ({ link, position, width, height, label }) => {
  return (
    <Link
      to={link}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
        textDecoration: 'none',
      }}
    >
      <Icon position={position} width={width} height={height} />
      <span style={{ width: 62, color: 'white', marginLeft: 10, fontSize: 14 }}>
        {label}
      </span>
    </Link>
  );
};

/** Style component*/
const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  button: {
    color: 'white',
    fontSize: 14,
    textTransform: 'none',
    width: 150,
    border: '2px solid white',

    marginLeft: 20,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
}));
const Cart = () => {
  /** Style component */
  const classes = useStyles();
  const { isSignedIn, user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    setAnchorEl(null);
    try {
      await authApi.get('/logout');
      dispatch(logout());
    } catch (error) {
      console.log(
        error.response && error.response.data.message
          ? error.resposne.data.message
          : error.message
      );
    }
  };

  return (
    <Box className={classes.box}>
      <Tab
        link="/payment/user/tracking"
        position="-362px -52px"
        width="22px"
        height="22px"
        label="Theo dõi đơn hàng"
      />
      <Tab
        link="/anounce"
        position="-304px -174px"
        width="24px"
        height="24px"
        label="Thông báo của tối"
      />
      <Button
        onClick={handleClick}
        startIcon={
          <PersonIcon
            style={{ fontSize: 30, display: 'inline-block', margin: 0 }}
          />
        }
        style={{
          border: 'none',
          color: '#fff',
          width: 120,
          fontSize: 12.5,
          padding: '0px 6px',
        }}
        disableElevation
        disableTouchRipple
        color="primary"
      >
        {isSignedIn ? user.name.split(' ')[0] : 'Đăng nhập tài khoản'}
      </Button>
      <Button
        variant="outlined"
        startIcon={<ShoppingIcon />}
        className={classes.button}
        component={Link}
        to="/payment/success"
      >
        Giỏ hàng
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          to={isSignedIn ? '/users/profile' : '/users/login'}
          className={classes.link}
        >
          <MenuItem onClick={handleClose} style={{ fontSize: 14 }}>
            {isSignedIn ? 'Profile' : 'Log In'}
          </MenuItem>
        </Link>
        {isSignedIn ? (
          <MenuItem onClick={handleLogout} style={{ fontSize: 14 }}>
            Log Out
          </MenuItem>
        ) : undefined}
      </Menu>
    </Box>
  );
};

export default Cart;
