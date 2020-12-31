import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../../../redux/actions/snack';

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

    padding: '10px',
    borderRadius: 5,
    border: '1px solid #fff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
});

const PaymentAdmin = () => {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();

  const handleReceivedBooking = async (booking_id) => {
    authApi
      .patch('/payment/received', {
        booking_id,
      })
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
  };

  useEffect(() => {
    authApi
      .get('/payment/shiping-status')
      .then((res) => {
        setBookings(res.data.data.booking);
      })
      .catch((err) => {
        const message =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        console.log(message);
      });
  }, []);

  return (
    <CenterLayout>
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
              >
                <img
                  src={booking.thumbnail_url.replace(
                    /\/cache\/[0-9]+x[0-9]+/g,
                    '/cache/60x60'
                  )}
                  alt="Product thumbnail"
                />
                <Box ml={1}>
                  <Typography variant="body1">
                    Product id: {booking.product}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color:
                        booking.ship && booking.received
                          ? 'blue'
                          : booking.ship
                          ? 'green'
                          : 'red',
                    }}
                  >
                    Status:{' '}
                    {booking.ship && booking.received
                      ? 'Đã nhận hàng'
                      : booking.ship
                      ? 'Đã giao hàng'
                      : 'Đang chờ xử lý'}
                  </Typography>
                </Box>
                <Button
                  color="primary"
                  style={{ margin: '0 20px 0 auto' }}
                  onClick={() => handleReceivedBooking(booking._id)}
                  disabled={
                    booking.ship && booking.received
                      ? true
                      : booking.ship
                      ? false
                      : true
                  }
                >
                  {booking.received ? 'Đã nhận hàng' : 'Nhận hàng'}
                </Button>
              </Grid>
            ))}
      </Grid>
    </CenterLayout>
  );
};

export default PaymentAdmin;
