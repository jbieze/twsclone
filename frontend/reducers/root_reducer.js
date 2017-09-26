import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import cities from './cities_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  cities
});

export default RootReducer;
