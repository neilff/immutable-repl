import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Immutable from 'immutable';
import base64 from 'base-64';
import { parse } from 'query-string';
import logThis from './utils/logThis';
import defaultExample from './utils/defaultExample';

import App from './containers/App';
import configureStore from './store/configureStore';

global.Immutable = Immutable;

const initialState = parse(window.location.search);

logThis('Initial State', initialState);

const store = configureStore({
  code: Immutable.fromJS({
    q: initialState.q ?
      base64.decode(initialState.q) :
      defaultExample,
  }),
});

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);