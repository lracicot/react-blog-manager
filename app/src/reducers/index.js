import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import { reducer as formReducer } from 'redux-form/immutable'

import AppReducers from './app.reducers';
import PostReducers from './post.reducers';
import ListReducers from './list.reducers';


const appReducer = (state = Map(), action) => {
  state = AppReducers(state, action);
  state = PostReducers(state, action);
  state = ListReducers(state, action);

  return state;
}

export default combineReducers({ app: appReducer, form: formReducer })
