import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { demoLogin } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: Object.keys(state.errors.sessionErrors).map((key) => {
      return state.errors.sessionErrors[key];
    })
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    demoLogin: () => dispatch(demoLogin()),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
