import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


const enhancer = compose(applyMiddleware(thunk));

export default initialState => createStore(
  reducers,
  initialState,
  enhancer,
);
