import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullErrors = Object.freeze({
  errors: []
});

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
