import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});


export const fetchAllUsers = () => dispatch => (
  UserApiUtil.fetchAllusers().then(users => (dispatch(receiveUsers(users))))
);

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const setCity = (userId, user) => dispatch => (
  UserApiUtil.setCity(userId, user).then(user => (
    dispatch(receiveUser(user))
  ))
);
