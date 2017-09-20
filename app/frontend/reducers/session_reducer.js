import { RECEIVE_CURRENT_USER, LOG_OUT } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = state;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      //
    case LOG_OUT:
      //
    default:
  }
};

export default SessionReducer;
