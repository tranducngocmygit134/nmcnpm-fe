import { useState, useEffect } from 'react';
/** Api */
import reviewsApi from '../apis/reviews';

const useComment = (product_id) => {
  const [comments, setComments] = useState({});
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /** IIFE */
    (async () => {
      console.log('run use custom hook');
      try {
        const response = await reviewsApi.get(`/${product_id}`, {
          params: { limit },
        });
        setComments(response.data.data.reviews);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [product_id, limit]);
  return [comments, setLimit, loading];
};

export default useComment;
