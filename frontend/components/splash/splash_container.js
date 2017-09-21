import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  signup: () => dispatch(signup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
