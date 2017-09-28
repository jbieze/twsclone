import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import cities from './cities_reducer';
import events from './events_reducer';
import joins from './joins_reducer';
import users from './users_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  cities,
  events,
  joins,
  users
});

export default RootReducer;
