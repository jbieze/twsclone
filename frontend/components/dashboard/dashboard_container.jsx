import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchEvents} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.session.currentUser.events,
    hostedEvents: state.session.currentUser.hosted_events,
    currentUser: state.session.currentUser,
    event: state.events,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
