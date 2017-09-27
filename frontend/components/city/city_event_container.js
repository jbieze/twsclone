import { connect } from 'react-redux';
import CityEvent from './city_event';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEvent);
