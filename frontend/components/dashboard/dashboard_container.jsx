import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  events: state.session.currentUser.events,
  event: state.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
