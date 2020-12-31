import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '80vh',
  },
});

export default function Loading({ type }) {
  const classes = useStyles();

  let size = 0;
  switch (type) {
    case 'card':
      size = 10;
      break;
    case 'page':
      size = 70;
      break;
    default:
      break;
  }

  return (
    <div className={classes.root}>
      <CircularProgress size={size} />
    </div>
  );
}
