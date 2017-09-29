import * as ApiUtil from '../util/user_api_util';
import { receiveErrors } from './session_actions';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });

export const fetchUsers = () => dispatch => (
  ApiUtil.fetchUsers().then(users => (dispatch(receiveUsers(users))))
);

export const fetchUser = id => dispatch => (
  ApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const setCity = (userId, user) => dispatch => (
  ApiUtil.setCity(userId, user).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => (dispatch(receiveUser(user))), err => (dispatch(receiveErrors(err.responseJSON))))
);
