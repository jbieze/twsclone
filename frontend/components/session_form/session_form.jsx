import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: [] });
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link className="signup-link" to="/signup">sign up</Link>;
    } else {
      return <Link className="signin-link" to="/login">sign in</Link>;
    }
  }

  secondaryNavLink() {
    if (this.props.formType === 'login') {
      return <Link className="secondary-signup-link" to="/signup">sign up</Link>;
    } else {
      return <Link className="secondary-signin-link" to="/login">sign in</Link>;
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}.
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonValue = "";
    if (this.props.formType === 'login') {
      buttonValue = "Sign In";
    } else {
      buttonValue = "Sign Up";
    }
    const inputName = this.props.formType === 'signup' ?
      <div className="session-form-navlink-main">
        <Link id="signup-link-body" to="/signup">sign up</Link>
        <label>
          <input
            className="session-form-input"
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.update('email')}/>
        </label>
      </div>
       :
       <div>
         <div className="session-form-navlink-main">
           { this.navLink() }
         </div>
      </div>;

    const greeting = this.props.formType === 'signup' ?
      <div className="signup-greeting-container">
        <h2>You have found yourself at TWSClone.</h2>
      </div> :
      <div className="signin-greeting-container">
        <h2>You have inexplicably returned to TWSClone.</h2>
      </div>;

    return (
      <div className="session-form">
        <div className="session-form-main-container" >

          {greeting}
          <br/>
          <h4 className="session-form-main-container-blurb">What are you doing here? Did you get lost?</h4>
          <form onSubmit={this.handleSubmit}>
              {this.props.formType === 'signup' ?
              <div>
                <label>
                  <input
                    className="session-form-input"
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.update('email')}/>
                </label>

            </div>
            :
          <div></div>}
            <label>
              <input
                className="session-form-input"
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}/>
            </label>
            <label>
              <input
                className="session-form-input"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}/>
            </label>
            <input className="session-form-submit-button" type="submit" value={buttonValue}/>
            <form className="session-form-demo" onSubmit={this.handleDemoLogin}>
              <input className="demo-login" type="submit" value="Demo" />
            </form>
            {this.renderErrors()}
          </form>
        </div>
      </div>
      );
    }
}

export default withRouter(SessionForm);
