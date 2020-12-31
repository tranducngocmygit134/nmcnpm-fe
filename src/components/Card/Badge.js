import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  badge: {
    display: 'flex',
    alignItems: 'center',

    padding: '2px 5px',
    clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 88% 100%)',
    '& > img': {
      height: 17,
    },
    '& > p': {
      fontSize: 12,
      marginLeft: 5,
      lineHeight: 0,
    },
  },
});

const Badge = ({ product, type, width }) => {
  const classes = useStyles();

  if (!product.badges_new) {
    return null;
  }
  const match = product.badges_new.find((badge) => badge.type === type);
  if (match) {
    return (
      <Box
        className={classes.badge}
        style={{
          backgroundColor: match.background_color,
          width: width ? width : '100%',
        }}
      >
        <img src={match.icon} alt={match.code} />
        <Typography style={{ color: match.text_color }}>
          {match.text}
        </Typography>
      </Box>
    );
  }
  return null;
};

export default Badge;
