import { postTypes } from '../../consts';
import * as Actions from '../../actions/post.actions';
import {
  putData,
  getData,
  postData,
  deleteData,
} from '../../actions/data.creators';

export function createPost(post) {
  return dispatch => dispatch(
    putData(postTypes.POST_API.CREATE_POST_URL, { post }, Actions.createPostSuccess),
  );
}

export function retreivePosts() {
  return dispatch => dispatch(
    getData(postTypes.POST_API.RETEIVE_POSTS_URL, Actions.retreivePostsSuccess),
  );
}

export function updatePost(post) {
  return dispatch => dispatch(
    postData(`${postTypes.POST_API.UPDATE_POSTS_URL}/${post.id}`, { post }, Actions.updatePostSuccess),
  );
}

export function deletePost(postId) {
  return dispatch => dispatch(
    deleteData(`${postTypes.POST_API.DELETE_POSTS_URL}/${postId}`, postId, Actions.deletePostSuccess),
  );
}
