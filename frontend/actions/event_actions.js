import * as ApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS_ERRORS = "RECEIVE_EVENTS_ERRORS";
export const CLEAR_EVENTS_ERRORS = 'CLEAR_EVENTS_ERRORS';

export const receiveAllEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveSingleEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_EVENTS_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_EVENTS_ERRORS
});

export const fetchEvents = () => dispatch => (
  ApiUtil.fetchEvents().then(events => (
      dispatch(receiveAllEvents(events))
  ))
);

export const fetchEvent = (eventId) => dispatch => (
  ApiUtil.fetchEvent(eventId).then(event => dispatch(receiveSingleEvent(event)))
);
