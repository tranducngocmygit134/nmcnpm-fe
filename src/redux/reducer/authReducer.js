import {
  FAIL,
  REQUEST,
  SUCCESS,
  USER_LOGOUT,
  USER_UPDATE,
  RESET_PASSWORD_SUCCESS,
} from '../constant/auth';

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;
const INITIAL_STATE = {
  isSignedIn: user ? true : false,
  user,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST: {
      return { isSignedIn: false };
    }
    case SUCCESS: {
      return { isSignedIn: true, user: action.payload };
    }
    case FAIL: {
      return { isSignedIn: false, user: null };
    }
    case USER_LOGOUT: {
      return { isSignedIn: false, user: null };
    }
    case USER_UPDATE: {
      return { isSignedIn: true, user: action.payload };
    }
    case RESET_PASSWORD_SUCCESS: {
      return { isSignedIn: true, user: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
