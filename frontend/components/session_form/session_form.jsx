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
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
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

    const inputName = this.props.formType === 'signup' ?
      <div className="session-form-navlink-main">
        {this.navLink()}
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
      <div className="greeting-container">
        <h1>Welcome to TWSClone!</h1>
      </div> :
      <div className="greeting-container">
        <h1>Welcome back to TWSClone!</h1>
      </div>;

    return (
      <div >
        <div className="session-form-main-container" >

          {greeting}
          {this.renderErrors()}

          <div className="session-form-navlink-main">
            {this.navLink()}
          </div>

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
                <br /><br />
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
            <br />
            <br />
            <label>
              <input
                className="session-form-input"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}/>
            </label>
            <br /><br />
            <input className="session-form-submit-button" type="submit" value="Submit"/>
          </form>
          <br /><br />
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
