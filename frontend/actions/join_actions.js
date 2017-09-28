import * as ApiUtil from '../util/join_api_util';

export const RECEIVE_JOIN = "RECEIVE_JOIN";
export const REMOVE_JOIN = "REMOVE_JOIN";

export const createJoin = join => dispatch => (
  ApiUtil.createJoin(join).then(join => dispatch(receiveJoin(join)))
);

export const deleteJoin = (join) => dispatch => (
  ApiUtil.deleteJoin(join).then(join => dispatch(removeJoin(join)))
);

const receiveJoin = join => ({
  type: RECEIVE_JOIN,
  join
});

const removeJoin = join => ({
  type: REMOVE_JOIN,
  join
});
