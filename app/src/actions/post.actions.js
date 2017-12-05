
export function createPostSuccess(post) {
  return {
    type: 'CREATE_POST_SUCCESS',
    post,
  };
}

export function retreivePostsSuccess(posts) {
  return {
    type: 'RETREIVE_POSTS_SUCCESS',
    posts,
  };
}

export function updatePostSuccess(post) {
  return {
    type: 'UPDATE_POST_SUCCESS',
    post,
  };
}

export function deletePostSuccess(postId) {
  return {
    type: 'DELETE_POST_SUCCESS',
    postId,
  };
}
