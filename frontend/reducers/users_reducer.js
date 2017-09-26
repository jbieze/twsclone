import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge, mapValues, pick } from 'lodash';

const mergeBasics = (state, obj) => {
  const keys = Object.keys(obj).filter(key => (typeof obj[key]) !== 'object');
  const simpleObj = pick(obj, keys);
  state[obj.id] = simpleObj;
};

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        mergeBasics(newState, action.user);
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default UsersReducer;
