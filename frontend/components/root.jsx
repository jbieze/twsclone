import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;
