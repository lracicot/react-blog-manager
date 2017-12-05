/**
 * @name PostConstants
 * Constants for post module
 */

const postApiUrl = process.env.POST_API_URL || 'http://localhost:8000/api/posts/';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const RETREIVE_POSTS_SUCCESS = 'RETREIVE_POSTS_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const POST_API = {
  CREATE_POST_URL: `${postApiUrl}/add`,
  RETEIVE_POSTS_URL: `${postApiUrl}/all`,
  UPDATE_POSTS_URL: postId => `${postApiUrl}/post/${postId}`,
  DELETE_POSTS_URL: postId => `${postApiUrl}/post/${postId}`,
};
