import * as ApiUtil from '../util/event_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveUserEvents = events => ({
  type: RECEIVE_USER_EVENTS,
  events
});

export const deleteEvent = event => ({
  type: REMOVE_EVENT,
  event
});

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
});

export const fetchEvents = cityId => dispatch => (
  ApiUtil.fetchEvents(cityId).then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = id => dispatch => (
  ApiUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const fetchUserEvents = () => dispatch => (
  ApiUtil.fetchUserEvents().then(events => dispatch(receiveUserEvents(events)))
);

export const createEvent = newEvent => dispatch => {
  return ApiUtil.createEvent(newEvent).then(event => dispatch(receiveEvent(event)));
};

export const removeEvent = id => dispatch => (
  ApiUtil.removeEvent(id).then(event => dispatch(deleteEvent(event)))
);
