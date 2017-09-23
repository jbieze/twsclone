import { RECEIVE_CITIES, RECEIVE_CITY, CLEAR_CITY} from '../actions/city_actions';
import merge from 'lodash/merge';

const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CITIES:
      return merge({}, state, action.cities);
    case RECEIVE_CITY:
      return merge({}, state, action.city);
    default:
      return state;
  }
};

export default CitiesReducer;
