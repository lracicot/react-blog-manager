import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default initialState => createStore(
  reducers,
  initialState,
  enhancer,
);
