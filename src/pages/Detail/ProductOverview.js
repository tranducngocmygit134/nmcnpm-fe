import React, { useState } from 'react';
import authApi from '../../apis/auth';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../../redux/actions/snack';

import { loadStripe } from '@stripe/stripe-js';

/** Material ui */
import {
  Grid,
  Divider,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
  Box,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

/** Component */
import Image from './Image';
import Snack from '../../components/Snack';

/** Style */
const useStyles = makeStyles({
  imageContainer: {
    backgroundColor: 'white',
    borderRight: '1px solid #bdbdbd',
    padding: 15,
    alignItems: 'center',
  },
  mainContentContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  buyButton: {
    color: 'white',
    backgroundColor: 'red',
    width: 350,
    padding: '10px 0',
    margin: '20px 0',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
});

const stripePromise = loadStripe(
  'pk_test_51I1lU7KzjpIa1Mi1tJKuwHRtLZx1OCvDmkvk46UVn6tswRGDL7F9uJm30dQc701g4n2XGd9Bq7z3L8xwf5HrTs7s00L5xKqFw3'
);
const ProductOverview = ({ product }) => {
  /** Style */
  const classes = useStyles();
  /** Hook */
  const [total, setTotal] = useState(1);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [productOption, setProductOption] = useState(
    product.configurable_products === undefined
      ? null
      : product.configurable_products[0]
  );
  const dispatch = useDispatch();

  /** Handle event */
  const updateProductOption = (_, label) => {
    setThumbnailIndex(0);
    const updateProduct = product.configurable_products.find((item) => {
      return item.option1 === label;
    });
    if (updateProduct) {
      setProductOption(updateProduct);
    } else {
      return;
    }
  };
  const handleAddToCart = async (product) => {
    const { protocol, host } = window.location;
    const success_url = `${protocol}//${host}/users/payment/${product.id}`;
    const cancel_url = `${protocol}//${host}/products/${product.id}`;
    try {
      const session = await authApi.post('/checkout-session', {
        product,
        quantity: total,
        success_url,
        cancel_url,
      });

      (await stripePromise).redirectToCheckout({
        sessionId: session.data.session.id,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(errorMessage(message));
    }
  };

  /** Component */
  const ProductName = (
    <>
      <Grid item xs={11}>
        <span
          style={{
            borderRight: '1px solid #bdbdbd',
            paddingRight: 10,
            display: 'inline',
          }}
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/e9/68/49/50ac83c9f95bd008cc840e638f0f5791.png"
            alt="tikinow"
            style={{ width: 91, height: 26 }}
          />
        </span>
        <Typography variant="h1" style={{ marginLeft: 10, display: 'inline' }}>
          {product.name}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton style={{ marginLeft: 'auto', padding: 8 }}>
          <FavoriteBorderIcon />
        </IconButton>
      </Grid>
    </>
  );
  const ProductPrice = () => {
    const price = productOption !== null ? productOption.price : product.price;
    return (
      <>
        <Typography variant="body1" style={{ fontSize: 30, marginRight: 10 }}>
          {convertToVndFormat(price)}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            textDecoration: 'line-through',
            fontSize: '0.9rem',
            marginRight: 10,
          }}
        >
          {product.list_price > price && convertToVndFormat(product.list_price)}{' '}
        </Typography>
        <Typography variant="subtitle2">
          {discount_rate(price, product.list_price)}
        </Typography>
      </>
    );
  };

  const ProductFilter = (
    <>
      {productOption !== null && (
        <Grid item container direction="column" style={{ marginBottom: 20 }}>
          <Grid item>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              Chọn {product.configurable_options[0].name}:{' '}
              <span style={{ fontWeight: 'bold' }}>
                {productOption.option1}
              </span>
            </Typography>
            <ButtonGroup>
              {product.configurable_options[0].values.map((value) => (
                <Button
                  key={value.label}
                  color="primary"
                  variant={
                    productOption.option1 === value.label
                      ? 'contained'
                      : 'outlined'
                  }
                  disableElevation
                  onClick={(e) => updateProductOption(e, value.label)}
                  style={{
                    color:
                      productOption.option1 === value.label ? 'white' : 'black',
                  }}
                >
                  {value.label}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
      )}
    </>
  );

  const ProductBuy = (
    <>
      <Typography variant="subtitle1">Số Lượng</Typography>
      <ButtonGroup>
        <Button
          onClick={() => {
            total > 1 && setTotal(total - 1);
          }}
        >
          -
        </Button>
        <Button>{total}</Button>
        <Button onClick={() => setTotal(total + 1)}>+</Button>
      </ButtonGroup>
      <Button
        variant="contained"
        disableElevation
        className={classes.buyButton}
        onClick={() => handleAddToCart(product)}
      >
        Chọn Mua
      </Button>
    </>
  );
  return (
    <Grid item container>
      <Snack />
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={5}
        className={classes.imageContainer}
      >
        <Image
          url={
            productOption !== null
              ? productOption.images[thumbnailIndex].medium_url
              : product.thumbnail_url
          }
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={7}
        direction="column"
        className={classes.mainContentContainer}
      >
        <Grid item container style={{ alignItems: 'center' }}>
          {ProductName}
        </Grid>

        <Grid
          item
          container
          style={{ alignItems: 'center', marginTop: '0.5rem' }}
        >
          <Rating value={product.rating_average * 1} precision={0.1} readOnly />
          <span> ( Xem {product.review_count} đánh giá)</span>
        </Grid>

        {/* Price */}
        <Grid
          item
          container
          style={{ alignItems: 'center', padding: '10px 20px' }}
        >
          {ProductPrice()}
        </Grid>

        {/* Color filter */}
        {ProductFilter}

        {/* Image filter */}
        {productOption && (
          <Grid item>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              Chọn ảnh:
            </Typography>
            {productOption.images.map((image, index) => (
              <Box
                style={{
                  display: 'inline-block',
                  border: index === thumbnailIndex ? '2px solid blue' : null,
                  margin: 5,
                  borderRadius: 5,
                }}
                key={index}
              >
                <img
                  src={image.small_url}
                  alt={productOption.name}
                  onClick={() => {
                    setThumbnailIndex(index);
                  }}
                  style={{ borderRadius: 5 }}
                />
              </Box>
            ))}
          </Grid>
        )}

        {/* Buy */}
        <Divider style={{ marginTop: 'auto', marginBottom: 10 }} />
        <Grid item container direction="column">
          {ProductBuy}
        </Grid>
      </Grid>
    </Grid>
  );
};

function convertToVndFormat(price) {
  return price.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
}
function discount_rate(price, discount) {
  const percent = 1 - price / discount;
  return percent > 0 ? `- ${Math.floor(percent * 100)} %` : undefined;
}

export default ProductOverview;
