import { connect } from 'react-redux';
import City from './city';
import { fetchCity } from '../../actions/city_actions';
import { fetchUser, updateUser } from '../../actions/session_actions';
import lodash from 'lodash';

const mapStateToProps = (state, ownProps ) => {
  return {
    city: state.city,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCity: id => dispatch(fetchCity(id)),
  fetchUser: user => dispatch(fetchUser(user)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
