import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import authApi from '../../apis/auth';

/** Material ui */
import {
  Typography,
  Grid,
  LinearProgress,
  Box,
  Divider,
  Avatar,
  Button,
  TextField,
  Modal,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CommentByImages from './CommentByImages';
import { useDispatch } from 'react-redux';
import { successMessage, errorMessage } from '../../redux/actions/snack';

/** Style */
const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'white',
    padding: 40,
  },
});
const BorderLinearProgress = withStyles({
  root: {
    height: 7,
    width: 220,
    borderRadius: 5,
    margin: '0 6px',
  },
  colorPrimary: {
    backgroundColor: '#eee',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'rgb(120, 120, 120)',
  },
})(LinearProgress);

function Comments({ comments, setLimit, loading, product_id }) {
  /** Style */
  const classes = useStyles();
  const { isSignedIn, user } = useSelector((state) => state.auth);
  const [ratingReview, setRatingReview] = useState(2);
  const [createTitle, setCreateTitle] = useState('');
  const [createContent, setCreateContent] = useState('');
  const [openPopup, setOpenPopup] = useState(false);
  const [reviews, setReviews] = useState(comments.data || []);
  const dispatch = useDispatch();

  const handlePostComment = async () => {
    if (!createContent || !createTitle) {
      dispatch(errorMessage('Please fill all fields'));
    }
    await authApi
      .post(`/reviews/${product_id}`, {
        title: createTitle,
        content: createContent,
        rating: ratingReview,
      })
      .then((res) => {
        setReviews(res.data.data.reviews.data);
        dispatch(successMessage(res.data.message));
        setOpenPopup(false);
      })
      .catch((err) => {
        const message =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        dispatch(errorMessage(message));
      });
  };

  return (
    <Grid item container direction="column">
      <Typography variant="h2" style={{ margin: '2rem 0 1rem 0' }}>
        KHÁCH HÀNG NHẬN XÉT
      </Typography>
      <Grid container className={classes.mainContainer}>
        <Grid item container>
          <Grid item container>
            <Typography
              variant="h2"
              style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}
            >
              Đánh giá
            </Typography>
          </Grid>
          <Grid item container xs={12} lg={8} direction="row">
            <Grid
              item
              container
              xs={12}
              sm={3}
              direction="column"
              align="center"
              style={{
                borderRight: '1px solid #bdbdbd',
                marginRight: '1rem',
              }}
            >
              <Typography variant="h2" style={{ fontSize: '2.5rem' }}>
                {comments.rating_average}
              </Typography>
              <Box style={{ display: 'block' }}>
                <Rating
                  value={comments.rating_average}
                  precision={0.1}
                  readOnly
                />
              </Box>
              <Typography>({comments.reviews_count}) nhận xét</Typography>
            </Grid>
            <Grid item container xs={12} sm={8} style={{ height: 100 }}>
              {Object.values(comments.stars)
                .reverse()
                .map((star, index) => (
                  <Grid
                    key={index}
                    item
                    container
                    style={{ alignItems: 'center' }}
                  >
                    <Rating
                      value={5 - index}
                      readOnly
                      style={{ fontSize: 16 }}
                    />
                    <BorderLinearProgress
                      value={star.percent}
                      variant="determinate"
                    />
                    <Typography variant="body1">{star.count}</Typography>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Box
          style={{
            backgroundColor: '#eeeeee',
            padding: '10px',
            margin: '20px 0 0 30px',
          }}
          onClick={() => setOpenPopup(true)}
        >
          <Typography variant="body1" style={{ width: 485 }}>
            Thêm nhận xét
          </Typography>
        </Box>
        {reviews.map((comment, index) => {
          const time = new Date(comment.created_by.purchased_at * 1000);
          return (
            <Grid container item direction="column" key={comment._id}>
              <Divider style={{ margin: '2rem 0' }} />
              <Grid item container>
                <Grid
                  item
                  container
                  xs={1}
                  style={{ justifyContent: 'center' }}
                >
                  <Avatar
                    alt={comment.created_by.name}
                    src={comment.created_by.avatar_url}
                  />
                </Grid>
                <Grid item container xs={11} direction="column">
                  <Grid item>
                    <Typography variant="body2">
                      {comment.created_by.full_name}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    style={{ alignItems: 'center' }}
                  >
                    <Typography variant="subtitle1">
                      {`Nhận xét vào tháng ${
                        time.getMonth() + 1 + ', ' + time.getFullYear()
                      }`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Rating value={comment.rating} readOnly />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h3"
                      style={{
                        margin: '8px 0 5px 0',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                      }}
                    >
                      {comment.title}
                    </Typography>
                    <Typography variant="subtitle1">
                      {comment.content}
                    </Typography>
                  </Grid>
                  {comment.images.length > 0 && (
                    <CommentByImages images={comment.images} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Modal
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          item
          container
          style={{
            backgroundColor: '#fff',
            width: 600,
            padding: 20,
          }}
        >
          <Grid
            item
            container
            xs={1}
            style={{ justifyContent: 'center', marginRight: 10 }}
          >
            <Avatar
              alt="User avatar"
              src={user && user.photo ? user.photo : ''}
            />
          </Grid>
          <Grid item container xs={10} direction="column">
            <Grid item>
              <Typography variant="body2">
                {user && user.name ? user.name : 'Un authorized'}
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                name="simple-controlled"
                value={ratingReview}
                onChange={(event, newValue) => {
                  setRatingReview(newValue);
                }}
              />
            </Grid>
            <Grid item container style={{ width: 430 }}>
              <TextField
                label="Title"
                fullWidth
                onChange={(e) => setCreateTitle(e.target.value)}
                autoFocus
              />
              <TextField
                label="Content"
                fullWidth
                style={{ margin: '10px 0' }}
                onChange={(e) => setCreateContent(e.target.value)}
              />
              <Button
                color="primary"
                fullWidth
                variant="contained"
                disabled={!isSignedIn}
                onClick={handlePostComment}
              >
                Nhận Xét
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  );
}

export default Comments;

/**
 */
