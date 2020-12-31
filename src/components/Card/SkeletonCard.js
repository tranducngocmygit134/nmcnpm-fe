import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 350,
    margin: theme.spacing(2),
    boxShadow: 'none',
  },
  media: {
    height: 190,
  },
}));

function SkeletonCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Skeleton animation="wave" variant="rect" className={classes.media} />
      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={12} width="50%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
}

export default SkeletonCard;
