import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import AppReducers from './app.reducers';
import PostReducers from './post.reducers';
import ListReducers from './list.reducers';


export default (state = Map(), action) => {
  state = AppReducers(state, action);
  state = PostReducers(state, action);
  state = ListReducers(state, action);

  return state;
}
