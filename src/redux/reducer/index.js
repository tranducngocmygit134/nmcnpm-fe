import { combineReducers } from 'redux';

import authReducer from './authReducer';
import snackReducer from './snackReducer';

const reducer = combineReducers({
  auth: authReducer,
  snack: snackReducer,
});

export default reducer;
