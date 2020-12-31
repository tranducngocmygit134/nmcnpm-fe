import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import authApi from '../../../apis/auth';
import Error from '../../../components/Error';

const ActiveUser = () => {
  const { user_id } = useParams();
  const [statusCode, setStatusCode] = React.useState();
  const [message, setMessage] = React.useState();
  useEffect(() => {
    authApi
      .get(`/active/${user_id}`)
      .then((res) => {
        setStatusCode(200);
        setMessage(res.data.message);
      })
      .catch((error) => {
        setStatusCode(500);
        setMessage(
          error.response && error.response.message
            ? error.response.message
            : error.message
        );
      });
  });

  return (
    <>
      <Error active_user={true} statusCode={statusCode} message={message} />
    </>
  );
};

export default ActiveUser;
