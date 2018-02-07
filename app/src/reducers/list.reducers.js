import { Map } from 'immutable';

// import { listTypes as Action } from '../consts';


export default function ListReducers(state = Map(), action) {
  const { type } = action;

  switch (type) {
  default:
    return state;
  }
}
