import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="signin-signup">
    <Link className="signin-link" to="/login">sign in</Link>
    &nbsp; &nbsp;
    <Link className="signup-link" to="/signup">sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2>Hello, {currentUser.username}.</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
