import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container.js';

const App = () => (
  <div>
    <header>
      <h1>TWSClone</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);
