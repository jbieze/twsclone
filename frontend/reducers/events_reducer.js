import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_EVENTS_ERRORS, CLEAR_EVENTS_ERRORS, REMOVE_EVENT } from '../actions/event_actions';
import { merge } from 'lodash';

const _nullEvents = {
  events: {},
  errors: []
};

const EventsReducer = (state = _nullEvents, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge({}, state, { events: action.events });
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_EVENTS_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_EVENTS_ERRORS:
      return { errors: [] };
    case REMOVE_EVENT:
      return { events: {} };
    default:
      return state;
  }
};

export default EventsReducer;
