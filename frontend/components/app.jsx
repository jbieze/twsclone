import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, HashRouter } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <div className="container">
        <Link className="session-form-navlink-home" to="/">TWSClone</Link>
        <GreetingContainer />
      </div>
    </header>

    <Route path="/login" component={ SessionFormContainer } />
    <Route path="/signup" component={ SessionFormContainer } />
  </div>
);

export default App;
