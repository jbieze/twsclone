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

const loggedInSessionLinks = (currentUser, logout) => (
	<hgroup className="header-group">
    <Link className="logged-in-cities-link" to="/cities">cities</Link>
    <Link className="dashboard-link" to="/dashboard">dashboard</Link>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? loggedInSessionLinks(currentUser, logout) : sessionLinks()
);

export default Greeting;
