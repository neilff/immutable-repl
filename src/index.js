import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Immutable from 'immutable';
import base64 from 'base-64';
import { parse } from 'query-string';
import defaultExample from './utils/defaultExample';

import App from './containers/App';
import configureStore from './store/configureStore';

// Attach Immutable to the window, and expose it's methods on the window
// for short-form access.
global.Immutable = Immutable;
const immutableKeys = Object.keys(Immutable);
immutableKeys.map(i => global[i] = Immutable[i]);

const initialState = parse(window.location.search);

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
