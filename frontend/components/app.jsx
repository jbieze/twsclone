import React from 'react';
import { Link, Route, HashRouter, IndexRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import CitiesIndexContainer from './cities_index/cities_index_container';
import CityContainer from './city/city_container';
import Home from './session_form/home';


const App = () => (
  <div>
    <header>
      <div className="container">
        <Link className="session-form-navlink-home" to="/" ><img className="logo-img" src="https://dcu7hky3kqbj1.cloudfront.net/assets/landing/logo-navbar-73cdae81cdb2f3eeccbb6e72b6a513344264952015da959fbb1a3c81216a5dcb.png"></img></Link>
        <GreetingContainer />
      </div>
    </header>
    <Route path="/login" component={ SessionFormContainer } />
    <Route path="/signup" component={ SessionFormContainer } />
    <Route exact path="/cities" component={CitiesIndexContainer} />
    { <Route path="/cities/:id" component={CityContainer} /> }
    <Route exact path='/' component={Home} />
  </div>
);

export default App;
