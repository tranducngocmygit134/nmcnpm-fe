import React, { useState } from 'react';

/** Material ui */
import { Grid, Dialog, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import CloseIcon from '@material-ui/icons/Close';

/** Styles */
const useStyles = makeStyles({
  paper: {
    margin: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  img: {
    maxWidth: 800,
    maxHeight: 800,
    '@media ( max-width: 800px )': {
      maxWidth: 600,
      maxHeight: 600,
    },
    '@media ( max-width: 600px )': {
      maxWidth: 400,
      maxHeight: 400,
    },
    '@media ( max-width: 400px )': {
      maxWidth: 200,
      maxHeight: 200,
    },
  },
  closeDialog: {
    position: 'absolute',
    top: 0,
    right: 20,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  iconButton: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  icon: {
    fontSize: '2.5rem',
    '@media ( max-width: 600px )': {
      fontSize: '1.5rem',
    },
  },
});
function CommentByImages({ images }) {
  /** Style*/
  const classes = useStyles();
  /** Hook*/
  const [openDialog, setOpenDialog] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Grid item container spacing={1}>
      <>
        {images.map((image, index) => (
          <Grid
            item
            key={image.id}
            onClick={() => {
              setOpenDialog(true);
              setImageIndex(index);
            }}
          >
            <img
              src={image.full_path}
              alt="User feedback"
              style={{ width: 200, height: 200, borderRadius: 5 }}
            />
          </Grid>
        ))}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          classes={{ paper: classes.paper }}
        >
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100vw',
              height: '100vh',
            }}
          >
            <IconButton
              disabled={imageIndex === 0}
              onClick={() => setImageIndex(imageIndex - 1)}
              className={classes.iconButton}
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
            <img
              src={images[imageIndex].full_path}
              alt="User feedback"
              className={classes.img}
            />
            <IconButton
              disabled={imageIndex === images.length - 1}
              onClick={() => setImageIndex(imageIndex + 1)}
              className={classes.iconButton}
            >
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          </Box>
          <IconButton
            onClick={() => setOpenDialog(false)}
            className={classes.closeDialog}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </Dialog>
      </>
    </Grid>
  );
}

export default CommentByImages;
