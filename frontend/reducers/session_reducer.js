import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_JOIN, REMOVE_JOIN } from '../actions/join_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const _nullState = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullState, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, _nullState, { errors: action.errors });
    case RECEIVE_JOIN:
      newState.currentUser.joined_events.push(action.join.id);
      return newState;
    case REMOVE_JOIN:
      newState.currentUser.joined_events.forEach((event, i) => {
        if (event === action.join.event_id) {
          newState.currentUser.joined_events.splice(i, 1);
        }
      });
      return newState;
    case RECEIVE_USER:
      return merge({}, state, { currentUser: action.user });
    default:
      return state;
  }
};

export default SessionReducer;
