import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from './logger';
import queryMiddleware from '../middleware/queryMiddleware';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const store = compose(
    applyMiddleware(
      thunk,
      queryMiddleware,
      logger,
    ),
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
