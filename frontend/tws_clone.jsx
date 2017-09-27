import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllCities, fetchSingleCity } from './actions/city_actions';
import { fetchAllEvents, fetchSingleEvent, createEvent, destroyEvent } from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllEvents = fetchAllEvents;
  window.fetchSingleEvent = fetchSingleEvent;
  window.fetchAllCities = fetchAllCities;
  window.fetchSingleCity = fetchSingleCity;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
