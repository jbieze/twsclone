import * as ApiUtil from '../util/join_api_util';

export const RECEIVE_JOIN = "RECEIVE_JOIN";
export const REMOVE_JOIN = "REMOVE_JOIN";
export const RECEIVE_JOINS = "RECEIVE_JOINS";

export const receiveJoin = join => ({
  type: RECEIVE_JOIN,
  join
});

export const removeJoin = id => ({
  type: REMOVE_JOIN,
  id
});

export const receiveJoins = () => ({
  type: RECEIVE_JOINS
});

export const createJoin = (newJoin) => dispatch => (
  ApiUtil.createJoin(newJoin).then(join => dispatch(receiveJoin(join)))
);

export const deleteJoin = (id) => dispatch => (
  ApiUtil.deleteJoin(id).then(join => dispatch(removeJoin(join)))
);


export const fetchJoins = () => dispatch => (
  ApiUtil.fetchJoins().then(attendances => dispatch(receiveJoins(attendances)))
);

export const fetchJoin = (id) => dispatch => (
  ApiUtil.fetchJoins(id).then(join => dispatch(receiveJoin(join)))
);
