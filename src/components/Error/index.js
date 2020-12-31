import React from 'react';
import './index.css';

const Error = ({ statusCode, message, active_user }) => {
  let type = '';
  if (statusCode === 400) {
    type = 'Bad Request';
  } else if (statusCode === 401) {
    type = 'Not Authorized';
  } else if (statusCode === 403) {
    type = 'Requested resource is forbidden';
  } else if (statusCode === 404) {
    type = 'Page not found';
  } else {
    type = 'Something went wrong';
  }
  if (active_user) {
    return (
      <div className="container">
        <h2>Hello guy, Welcome to my website!</h2>
        <h1>{statusCode}</h1>
        <p>{message}.</p>
        <a href="/">Go back home</a>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Oops! {type}.</h2>
      <h1>{statusCode}</h1>
      <p>{message}</p>
      <a href="/">Go back home</a>
    </div>
  );
};

export default Error;
