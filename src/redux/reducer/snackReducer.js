import {
  SUCCESS_SEVERITY,
  ERROR_SEVERITY,
  NO_SEVERITY,
} from '../constant/snack';

const INITIAL_STATE = {
  open: false,
  message: '',
  severity: '',
};
const snackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS_SEVERITY: {
      return { open: true, ...action.payload };
    }
    case ERROR_SEVERITY: {
      return { open: true, ...action.payload };
    }
    case NO_SEVERITY: {
      return { ...state, open: false };
    }
    default:
      return state;
  }
};

export default snackReducer;
