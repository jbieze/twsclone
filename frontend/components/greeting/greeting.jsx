import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="greeting-thing">
    <nav className="signin-signup">
      <Link className="cities-link" to="/cities">cities</Link>
      <Link className="signin-link" to="/login">sign in</Link>
      &nbsp; &nbsp;
      <Link className="signup-link" to="/signup">sign up</Link>
    </nav>
  </div>
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
