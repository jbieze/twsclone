import * as ApiUtil from '../util/registration_api_util';

export const RECEIVE_JOIN = 'RECEIVE_JOIN';
export const REMOVE_JOIN = "REMOVE_JOIN";

export const receiveJoin = join => ({
  type: RECEIVE_JOIN,
  join
});

export const removeJoin = join => ({
  type: REMOVE_JOIN,
  join
});

export const fetchJoin = joinId => dispatch => (
  RegistrationAPIUtil.fetchJoin(joinId).then(join => dispatch(receiveJoin(join)))
);

export const createJoin = join => (dispatch) => (
  ApiUtil.createJoin(join).then((join) => dispatch(receiveJoin(join)), (errors) => dispatch(receiveErrors(errors)))
);

export const destroyRegistration = joinId => dispatch => (
  ApiUtil.destroyRegistration(joinId).then(join => dispatch(removeJoin(join)))
);
