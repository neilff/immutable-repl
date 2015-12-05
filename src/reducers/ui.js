import { fromJS } from 'immutable';

export const TOGGLE_EXAMPLE_MENU = '@@repl/TOGGLE_EXAMPLE_MENU';

const INITIAL_STATE = fromJS({
  exampleMenuVisible: false,
});

function uiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case TOGGLE_EXAMPLE_MENU:
    return state.set('exampleMenuVisible', action.payload);

  default:
    return state;
  }
}

export function toggleExampleMenu() {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_EXAMPLE_MENU,
      payload: !getState().ui.get('exampleMenuVisible'),
    });
  };
}

export default uiReducer;
