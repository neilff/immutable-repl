import { fromJS } from 'immutable';

export const TOGGLE_EXAMPLE_MENU = '@@repl/TOGGLE_EXAMPLE_MENU';
export const TOGGLE_SPLIT_VIEW = '@@repl/TOGGLE_SPLIT_VIEW';

const INITIAL_STATE = fromJS({
  exampleMenuVisible: false,
  isSplitView: false,
});

function uiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case TOGGLE_SPLIT_VIEW:
    return state.set('isSplitView', action.payload);

  case TOGGLE_EXAMPLE_MENU:
    return state.set('exampleMenuVisible', action.payload);

  default:
    return state;
  }
}

export function toggleSplitView() {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_SPLIT_VIEW,
      payload: !getState().ui.get('isSplitView'),
    });
  };
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
