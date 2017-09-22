import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, HashRouter } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1 id="app-h1">TWSClone</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={ SessionFormContainer } />
    <Route path="/signup" component={ SessionFormContainer } />
  </div>
);

export default App;