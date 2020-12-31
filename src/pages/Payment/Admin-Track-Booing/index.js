import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../../../redux/actions/snack';
import Snack from '../../../components/Snack';

import authApi from '../../../apis/auth';
import CenterLayout from '../../../components/layout/CenterLayout';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
    padding: '20px 20px 220px 20px',
  },
  main_grid: {
    display: 'flex',
    alignItems: 'center',

    padding: '5px',
    borderRadius: 5,
    border: '1px solid #fff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #616161',
    },
  },
});

const PaymentAdmin = () => {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    authApi
      .get('/payment/booking')
      .then((res) => {
        setBookings(res.data.data.booking);
      })
      .catch((err) => {
        const message =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        dispatch(errorMessage(message));
      });
  }, [dispatch]);

  const handleTracking = (bookingId, thumbnail_url) => {
    history.push(
      `/payment/admin/tracking/${bookingId}?thumbnail=${thumbnail_url}`
    );
  };

  return (
    <CenterLayout>
      <Snack />
      <Grid container className={classes.container}>
        {bookings.length === 0
          ? Array.from(Array(3).keys()).map((_, index) => (
              <Grid
                item
                className={classes.main_grid}
                xs={6}
                sm={4}
                key={index}
              >
                <Skeleton variant="circle" width={60} height={60} />
                <Box ml={2}>
                  <Skeleton varaint="text" width={200} />
                  <Skeleton varaint="text" width={150} />
                </Box>
              </Grid>
            ))
          : bookings.map((booking) => (
              <Grid
                item
                className={classes.main_grid}
                xs={6}
                sm={4}
                key={booking._id}
                onClick={() =>
                  handleTracking(booking._id, booking.thumbnail_url)
                }
              >
                <img
                  src={booking.thumbnail_url.replace(/280x280/, '60x60')}
                  alt="Product thumbnail"
                />
                <Box>
                  <Typography variant="body1">
                    Product id: {booking.product}
                  </Typography>
                  <Typography variant="body1">
                    User id: {booking.user}
                  </Typography>
                </Box>
              </Grid>
            ))}
      </Grid>
    </CenterLayout>
  );
};

export default PaymentAdmin;
