import { Map } from 'immutable';

export function setState(state = Map()) {
  return {
    type: 'SET_STATE',
    state,
  };
}

export function resetState() {
  return {
    type: 'RESET_STATE',
    state: Map(),
  };
}
