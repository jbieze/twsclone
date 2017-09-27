import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  errors: err
});

export const requestEvents = cityId => dispatch => (
  APIUtil.fetchEvents(cityId).then(cityId => dispatch(receiveEvents(cityId)), err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestUserEvents = userId => dispatch => (
  APIUtil.fetchUserEvents(userId).then(userId => dispatch(receiveEvents(userId)),err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestEvent = id => dispatch => (
  APIUtil.fetchEvent(id).then(id => dispatch(receiveEvent(id)),err => dispatch(receiveErrors(err.responseJSON)))
);
