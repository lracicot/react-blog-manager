import { postTypes as Action } from '../consts';

export function createPostSuccess(data) {
  const { post } = data;
  return {
    type: Action.CREATE_POST_SUCCESS,
    post,
  };
}

export function retreivePostsSuccess(data) {
  const { posts } = data;
  return {
    type: Action.RETREIVE_POSTS_SUCCESS,
    posts,
  };
}

export function updatePostSuccess(data) {
  const { post } = data;
  return {
    type: Action.UPDATE_POST_SUCCESS,
    post,
  };
}

export function deletePostSuccess(data) {
  const { id } = data;
  return {
    type: Action.DELETE_POST_SUCCESS,
    postId: id,
  };
}
