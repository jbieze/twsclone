import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
});

export const demoLogin = () => dispatch => (
  ApiUtil.demoLogin().then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const login = user => dispatch => (
  ApiUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  ApiUtil.logout().then(user => (dispatch(receiveCurrentUser(null))))
);

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))))
);
