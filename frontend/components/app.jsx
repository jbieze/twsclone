import React from 'react';
import { Link, Route, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import CitiesIndexContainer from './cities_index/cities_index_container';
import CityContainer from './city/city_container';

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
    <Route exact path="/cities" component={CitiesIndexContainer} />
    { <Route path="/cities/:id" component={CityContainer} /> }
  </div>
);

export default App;
