import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/city_actions.js';
import { merge } from 'lodash';

const _nullState = {
  name: "",
  abbreviation: "",
  image_url: "",
  events: []
};

const CitiesReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CITIES:
      return merge({}, action.cities);
    case RECEIVE_CITY:
      return merge({}, state, { [action.city.id]: action.city });
    default:
      return state;
  }
};

export default CitiesReducer;
