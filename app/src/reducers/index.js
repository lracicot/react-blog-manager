import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import AppReducers from './app.reducers';
import PostReducers from './post.reducers';


export default (state = Map(), action) => {
  state = AppReducers(state, action);
  state = PostReducers(state, action);

  return state;
}
