import { connect } from 'react-redux';
import CityEvent from './city_event';
import { fetchCities, fetchCity } from '../../actions/city_actions';
import { fetchEvents } from '../../actions/event_actions';
import { createJoin, fetchJoin, deleteJoin } from '../../actions/join_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {

  return{
    city: state.cities[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    events: state.events,
    joins: state.joins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchCity: (id) => dispatch(fetchCity(id)),
  fetchEvents: () => dispatch(fetchEvents()),
  createJoin: (attendance) => dispatch(createJoin(attendance)),
  fetchJoin: (id) => dispatch(fetchJoin(id)),
  deleteJoin: (id) => dispatch(deleteJoin(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityEvent));
