import { Map } from 'immutable';

import { postTypes as Action } from '../consts';


function updatePostSucess(state, post) {
  const index = state.getIn(['data', 'posts']).findKey(
    p => p.get('id') === post.get('id'),
  );

  if (index !== undefined) {
    return state.setIn(['data', 'posts', index], post);
  }

  return state;
}

export default function PostReducers(state = Map(), action) {
  const { type } = action;

  switch (type) {
  case Action.CREATE_POST_SUCCESS:
    return state.setIn(
      ['data', 'posts'],
      state.getIn(['data', 'posts']).filter(
        p => p.get('id') !== action.post.get('id'),
      ).push(action.post),
    );

  case Action.RETREIVE_POSTS_SUCCESS:
    return state.setIn(['data', 'posts'], action.posts);

  case Action.UPDATE_POST_SUCCESS:
    return updatePostSucess(state, action.post);

  case Action.DELETE_POST_SUCCESS:
    return state.setIn(
      ['data', 'posts'],
      state.getIn(['data', 'posts']).filter(
        p => p.get('id') !== action.postId,
      ),
    );
  default:
    return state;
  }
}
