import { combineReducers } from 'redux';

import code from './code';
import ui from './ui';

const rootReducer = combineReducers({
  code,
  ui,
});

export default rootReducer;
