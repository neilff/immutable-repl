import { fromJS } from 'immutable';

export const TOGGLE_VISIBILITY = '@@repl/TOGGLE_VISIBILITY';

const INITIAL_STATE = fromJS({
  exampleVisible: false,
  settingsVisible: false,
  splitView: false,
});

function uiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case TOGGLE_VISIBILITY:
    return state.set(action.payload.id, action.payload.state);

  default:
    return state.merge(fromJS({
      exampleVisible: false,
      settingsVisible: false,
    }));
  }
}

export function toggleVisbility(id) {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_VISIBILITY,
      payload: {
        id,
        state: !getState().ui.get(id),
      },
    });
  };
}

export default uiReducer;
