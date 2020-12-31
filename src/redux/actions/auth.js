import {
  REQUEST,
  SUCCESS,
  FAIL,
  USER_UPDATE,
  RESET_PASSWORD_SUCCESS,
  USER_LOGOUT,
} from '../constant/auth';
import authApi from '../../apis/auth';
import { successMessage, errorMessage } from './snack';

const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({
      type: REQUEST,
    });

    const loginRes = await authApi.post('/login', { email, password });

    dispatch({
      type: SUCCESS,
      payload: loginRes.data.data.user,
    });

    /** store in local storage */
    localStorage.setItem('user', JSON.stringify(loginRes.data.data.user));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FAIL,
    });
    dispatch(errorMessage(message));
  }
};

const signup = ({ name, email, password, confirmPassword, url }) => async (
  dispatch
) => {
  try {
    dispatch({
      type: REQUEST,
    });
    const signupRes = await authApi.post('/signup', {
      email,
      password,
      name,
      confirmPassword,
      url,
    });

    dispatch({
      type: SUCCESS,
      payload: signupRes.data.data.user,
    });
    const { message } = signupRes.data;
    dispatch(successMessage(message));

    /** store in local storage */
    localStorage.setItem('user', JSON.stringify(signupRes.data.data.user));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FAIL,
      payload: message,
    });
    dispatch(errorMessage(message));
  }
};

const update = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: USER_UPDATE,
    payload: user,
  };
};

const resetPassword = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: user,
  };
};

const logout = () => {
  localStorage.removeItem('user');
  return {
    type: USER_LOGOUT,
  };
};

export { login, signup, update, resetPassword, logout };
