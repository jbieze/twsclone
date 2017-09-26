import * as CityApiUtil from "../util/city_api_util";

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";

export const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
});

export const fetchCities = () => dispatch => (
  CityApiUtil.fetchCities().then(cities => (dispatch(receiveCities(cities))))
);

export const fetchCity = id => dispatch => (
  CityApiUtil.fetchCity(id).then(city => dispatch(receiveCity(city)))
);
