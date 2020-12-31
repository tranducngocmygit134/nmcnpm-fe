import {
  SUCCESS_SEVERITY,
  ERROR_SEVERITY,
  NO_SEVERITY,
} from '../constant/snack';

const successMessage = (message) => {
  return {
    type: SUCCESS_SEVERITY,
    payload: {
      message,
      severity: 'success',
    },
  };
};

const errorMessage = (message) => {
  return {
    type: ERROR_SEVERITY,
    payload: {
      message,
      severity: 'error',
    },
  };
};

const noMessage = () => {
  return {
    type: NO_SEVERITY,
  };
};

export { successMessage, errorMessage, noMessage };
