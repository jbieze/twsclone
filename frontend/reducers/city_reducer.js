import { merge } from 'lodash';
import { RECEIVE_CITY } from '../actions/city_actions';

const _nullCity = {
  image_url: '',
  name: '',
  abbreviation: '',
  events: [],
  users: []
};

export default (state = _nullCity, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITY:
      return merge({}, action.city);
    default:
      return state;
  }
};
