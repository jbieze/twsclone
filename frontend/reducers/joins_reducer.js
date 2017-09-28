import { RECEIVE_JOIN, REMOVE_JOIN, RECEIVE_JOINS } from '../actions/join_actions';
import merge from 'lodash/merge';

export const JoinsReducer = (state = {errors: []}, action) => {
  switch(action.type) {
    case RECEIVE_JOIN:
      return merge({}, state, action.attendance);
    case RECEIVE_JOINS:
      return Object.assign({}, state, action.attendances);
    default:
      return state;
  }
};
