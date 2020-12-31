import React, { useState } from 'react';

/** Component */
import Badge from './Badge';

/** Material ui*/
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

/** Navigation */
import { Link } from 'react-router-dom';

/** Style component */
const useStyles = makeStyles((theme) => ({
  card: {
    border: '2px solid #fff',
    '&:hover': {
      border: '2px solid #eee',
    },
    boxShadow: 'none',
    display: 'block',
    maxWidth: 350,
    margin: '0 auto',

    textDecoration: 'none',
  },
  media: {
    height: 200,
    width: 200,
    margin: '0 auto',
  },
  imageContainer: {
    position: 'relative',
    padding: '15px 20px',
    '& span': {
      position: 'absolute',
      top: 15,
      left: 20,
      width: 40,
      height: 36,
      backgroundImage:
        'url(https://frontend.tikicdn.com/_desktop-next/static/img/icons/product/deal-tag.png)',
      backgroundSize: '40px 36px',
      backgroundPosition: '0px 0px',

      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      lineHeight: 2,
    },
  },
  content: {
    paddingTop: 0,
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  discountPercent: {
    fontSize: '0.9rem',
    fontWeight: 'normal',
  },
  discountPrice: {
    textDecoration: 'line-through',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  reviewsCount: {
    fontSize: '0.8rem',
    color: theme.common.text,
  },
  filterImage: {
    height: 30,
    padding: 2,
    '&:hover': {
      border: '1px solid blue',
    },
  },
}));

/***
 * @desc Card component for summary infomation of product
 * @param {boolean} discount - annotation for sale product
 * @param {object} product - all information about product
 * @return {JSX}
 */
const CardComponent = ({ discount, product }) => {
  /** Style component*/
  const classes = useStyles();

  /** Hook */
  const [thumnail, setThumbnail] = useState(product.thumbnail_url);

  return (
    // Card receive an anchor - link to product detail pages
    <Card
      className={classes.card}
      component={Link}
      to={`/products/${product.id}`}
    >
      {/* top_badge */}
      <Badge type="top_badge" width={100} product={product} />

      {/* Image and icon for sale product */}
      <Box className={classes.imageContainer}>
        <CardMedia
          className={classes.media}
          image={thumnail}
          title={product.name}
        />
        {/*display discount price on card*/}
        {discount !== undefined && <span> &nbsp;-{calcPercent(product)}%</span>}
      </Box>
      <CardContent className={classes.content}>
        {/* Option thumnail image */}
        {product.option_color && (
          <Box>
            {product.option_color.map((item, index) => (
              <img
                key={index}
                src={item.small_thumbnail}
                alt={item.display_name}
                className={classes.filterImage}
                onMouseOver={() => setThumbnail(item.thumbnail)}
              />
            ))}
          </Box>
        )}

        {/* Name product */}
        <Typography variant="subtitle2" noWrap>
          {product.name}
        </Typography>

        {/* badges */}
        <Badge type="service_badge" product={product} />

        {/* Price */}
        <Typography variant="body1" className={classes.price}>
          {convertToVndFormat(product.price)}
          <span className={classes.discountPercent}>
            &nbsp;&nbsp;-{calcPercent(product)}%
          </span>
        </Typography>
        <Typography variant="subtitle1" className={classes.discountPrice}>
          {convertToVndFormat(product.discount + product.price)}
        </Typography>

        {/* Under price icon */}
        <Badge type="under_price_icon" product={product} />

        <Box className={classes.rating}>
          <Rating
            value={product.rating_average}
            presicion={0.1}
            readOnly
            style={{ fontSize: '1rem' }}
          />
          <span className={classes.reviewsCount}>
            ( {product.review_count} nhận xét )
          </span>
        </Box>
      </CardContent>
    </Card>
  );
};

/**
 * @desc take price and convert to VND format
 * @param {object} product
 * @return VND format 1.000 d
 */
function calcPercent(product) {
  return (
    100 - Math.floor((product.price * 100) / (product.price + product.discount))
  );
}

function convertToVndFormat(price) {
  return price.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
}

export default CardComponent;
