import { Map } from 'immutable';
import configureStore from './configureStore';

/**
  * Index - Open the application
  */
(async () => {
  const store = configureStore();

  store.dispatch({
    type: 'SET_STATE',
    state: Map(),
  });
})();
