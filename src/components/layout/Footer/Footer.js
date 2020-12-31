import React from 'react';

/** Material ui*/
import { Box, Grid, Typography } from '@material-ui/core';

/** Components */
import CenterLayout from '../CenterLayout';

/** Data */
import data from './data';

/** Get data and generate jsx */
const FooterItem = data.map((item) => {
  let list;
  if (item.type === 'text') {
    list = item.content.map((text) => (
      <li
        key={text}
        style={{ fontSize: 14, color: 'rgb(51, 51, 51)', marginTop: 8 }}
      >
        {text}
      </li>
    ));
  } else if (item.type === 'image') {
    list = item.content.map((image) => (
      <li key={image}>
        <img
          src={image}
          alt="phương thức thanh toán"
          style={{ margin: '2px 5px' }}
        />
      </li>
    ));
  }

  return (
    <Grid
      item
      key={item.label}
      style={{ width: item.width, marginTop: '2rem' }}
    >
      <Typography variant="body1" style={{ marginBottom: '0.8rem' }}>
        {item.label}
      </Typography>
      <ul
        style={{
          listStyle: 'none',
          display: item.type === 'image' ? 'flex' : 'block',
          flexWrap: 'wrap',
        }}
      >
        {list}
      </ul>
      {item.label === 'KẾT NỐI VỚI CHÚNG TÔI' && (
        <Box mt={4}>
          <Typography
            variant="body1"
            style={{ fontSize: '0.7rem', marginBottom: '0.8rem' }}
          >
            TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
          </Typography>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <li>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                alt="phương thức thanh toán"
                style={{ margin: '2px 5px', width: 134 }}
              />
            </li>
            <li>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                alt="phương thức thanh toán"
                style={{ margin: '2px 5px', width: 134 }}
              />
            </li>
          </ul>
        </Box>
      )}
    </Grid>
  );
});
const Footer = () => {
  return (
    <Box
      style={{ backgroundColor: 'white', padding: '15px 0 200px 0' }}
      mt={6.5}
    >
      <CenterLayout>
        <Grid container style={{ justifyContent: 'center' }}>
          {FooterItem}
        </Grid>
      </CenterLayout>
    </Box>
  );
};

/** Export */
export default Footer;
