import { connect } from 'react-redux';
import City from './city';
import { fetchCity } from '../../actions/city_actions';
import { fetchUser, updateUser } from '../../actions/session_actions';
import { setCity } from '../../actions/user_actions';
import lodash from 'lodash';

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.cities[ownProps.match.params.id],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCity: id => dispatch(fetchCity(id)),
  fetchUser: user => dispatch(fetchUser(user)),
  setCity: (cityId, user) => dispatch(setCity(cityId, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
