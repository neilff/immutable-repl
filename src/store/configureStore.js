import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';

import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import logger from './logger';
import queryMiddleware from '../middleware/queryMiddleware';
import rootReducer from '../reducers';

const storageConfig = {
  key: 'immutable-repl',
  serialize: (store) => {
    return store && store.ui ?
      JSON.stringify(store.ui.toJS()) : store;
  },
  deserialize: (state) => ({
    ui: state ? fromJS(JSON.parse(state)) : fromJS({}),
  }),
};

function configureStore(initialState) {
  const store = compose(
    __DEV__ ?
      applyMiddleware(
        thunk,
        queryMiddleware,
        logger,
      ) :
      applyMiddleware(
        thunk,
        queryMiddleware,
      ),
    persistState('ui', storageConfig),
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
