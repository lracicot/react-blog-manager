import configureStore from './configureStore';
import { setState } from './actions/app.actions';

/**
  * Index - Open the application
  */
(async () => {
  const store = configureStore();
  store.dispatch(setState());
})();
