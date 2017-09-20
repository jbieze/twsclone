import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";

export const signUp = currentUser => dispatch => (
  UserAPIUtil.signup(currentUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const logIn = currentUser => dispatch => (
  SessionAPIUtil.logIn(currentUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const logOut = () => dispatch => (
  SessionAPIUtil.logOut().then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
