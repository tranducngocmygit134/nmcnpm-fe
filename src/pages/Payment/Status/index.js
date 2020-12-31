import React from 'react';
import { useLocation } from 'react-router-dom';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Box, Typography } from '@material-ui/core';

const PaymentFail = () => {
  const location = useLocation();

  let status;
  let message;
  try {
    status = location.search.split('?')[1].split('=')[1];
    message =
      'Bạn đã thanh toán thành công. Vui lòng kiểm tra email và theo dõi đơn hàng trong mục profile.';
  } catch (error) {
    status = 'fail';
    message = 'Đã có lỗi xảy ra. Vui lòng thử lại sau giây lát.';
  }

  let color = 'red';
  let message1 = 'Something went wrong!';
  let Icon = ErrorOutlineIcon;

  if (status === 'success') {
    color = '#8bc34a';
    message1 = 'Successful!';
    Icon = CheckCircleOutlineIcon;
  }
  return (
    <Box
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Icon style={{ fontSize: 100, color: color }} />
      <Typography
        variant="h1"
        style={{ fontSize: 40, fontWeight: 'bold', color: '#616161' }}
      >
        {message1}
      </Typography>
      <Typography style={{ fontSize: 20, color: '#333', maxWidth: 400 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default PaymentFail;
