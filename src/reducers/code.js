import { fromJS } from 'immutable';

export const CODE_UPDATE = '@@repl/CODE_UPDATE';

function codeReducer(state = fromJS({}), action = {}) {
  switch (action.type) {

  case CODE_UPDATE:
    return state.set('q', action.payload);

  default:
    return state;
  }
}

export function codeChange(input) {
  return {
    type: CODE_UPDATE,
    payload: input,
  };
}

export default codeReducer;
