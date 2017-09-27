import { connect } from 'react-redux';
import City from './city';
import { fetchCity, fetchCities } from '../../actions/city_actions';
import { fetchUser, updateUser } from '../../actions/session_actions';
import { setCity } from '../../actions/user_actions';
import { fetchEvents } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';
import lodash from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  cities: state.cities,
  city: state.cities[ownProps.match.params.id],
  currentUser: state.session.currentUser,
  events: selectEvents(state.events)
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchCity: cityId => dispatch(fetchCity(cityId)),
  fetchUser: user => dispatch(fetchUser(user)),
  setCity: (cityId, user) => dispatch(setCity(cityId, user)),
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
