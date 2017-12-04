import { Map } from 'immutable';
import { expect } from 'chai';

import appReducers from '../../src/reducers/appReducers';

describe('appReducers', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const newState = Map({
      test: 'success',
    });
    const action = {
      type: 'SET_STATE',
      state: newState,
    };
    const nextState = appReducers(initialState, action);

    expect(nextState).to.equal(newState);
  });
});
