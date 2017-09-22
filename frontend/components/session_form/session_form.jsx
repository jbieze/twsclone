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
  }

  componentWillReceiveProps(nextProps) {
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
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
        </label><br /><br />
      </div>
       :
       <div className="session-form-navlink-main">
         { this.navLink() }
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
        <br />
        <br />
        <div className="session-form-main-container" >

          {greeting}
          {this.renderErrors()}
          <br className="pre-blurb-break"/>
          <h4 className="session-form-main-container-blurb">What are you doing here? Did you get lost?</h4>
          <br className="post-blurb-break" />
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
          </form>
          <br /><br />
        </div>
      </div>
      );
    }

}

export default withRouter(SessionForm);