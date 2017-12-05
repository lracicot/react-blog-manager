import { Map } from 'immutable';
import { expect } from 'chai';

import AppReducers from '../../src/reducers/app.reducers';

describe('App reducers', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const newState = Map({
      test: 'success',
    });
    const action = {
      type: 'SET_STATE',
      state: newState,
    };
    const nextState = AppReducers(initialState, action);

    expect(nextState).to.equal(newState);
  });
});
