import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import SharedRoutes from './SharedRoutes';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import history from '../history';
import { Router } from 'react-router';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true }))))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <SharedRoutes />
    </Router>
  </Provider>,
  document.getElementById('app')
);

