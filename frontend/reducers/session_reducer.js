import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_JOIN } from '../actions/join_actions';

const _nullState = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, _nullState, { errors: action.errors });
    case RECEIVE_JOIN:
      let newState = merge({}, state);
      newState.currentUser.current_events.push(action.joinedEvent);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
