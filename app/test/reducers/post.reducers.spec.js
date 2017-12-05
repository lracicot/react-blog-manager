import { Map, List } from 'immutable';
import { expect } from 'chai';

import PostReducers from '../../src/reducers/post.reducers';


const posts = List.of(Map({
  id: '1',
  title: 'Test 1',
  content: 'Lorem ipsum',
  slug: 'test-1',
  published_date: '2017-09-20T01:00:00-0400',
}), Map({
  id: '2',
  title: 'Test 2',
  content: 'Lorem ipsum dolor sit amet',
  slug: 'test-2',
  published_date: '2017-10-20T01:00:00-0400',
}));

describe('Post reducers', () => {
  it('handles CREATE_POST_SUCCESS by adding a post to an empty list', () => {
    const initialState = Map({
      data: Map({
        posts: List(),
      }),
    });

    const action = {
      type: 'CREATE_POST_SUCCESS',
      post: posts.get(0),
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts']).get(0)).to.equal(posts.get(0));
  });

  it('handles CREATE_POST_SUCCESS by adding a second post to a list', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0)),
      }),
    });

    const action = {
      type: 'CREATE_POST_SUCCESS',
      post: posts.get(1),
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts']).get(0)).to.equal(posts.get(0));
    expect(nextState.getIn(['data', 'posts']).get(1)).to.equal(posts.get(1));
  });

  it('handles CREATE_POST_SUCCESS by not adding the same post twice', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0)),
      }),
    });

    const action = {
      type: 'CREATE_POST_SUCCESS',
      post: posts.get(0),
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState).to.equal(initialState);
    expect(nextState.getIn(['data', 'posts']).get(0)).to.equal(posts.get(0));
  });

  it('handles RETREIVE_POSTS_SUCCESS by replacing current list', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0)),
      }),
    });

    const action = {
      type: 'RETREIVE_POSTS_SUCCESS',
      posts: List.of(posts.get(1)),
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts'])).to.equal(List.of(posts.get(1)));
  });

  it('handles UPDATE_POST_SUCCESS by updating a post', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0)),
      }),
    });

    const updatedPost = posts.get(0).set('title', 'Test 1 - UPDATED');

    const action = {
      type: 'UPDATE_POST_SUCCESS',
      post: updatedPost,
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts', 0])).to.equal(updatedPost);
  });

  it('handles UPDATE_POST_SUCCESS by updating only the right post', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0), posts.get(1)),
      }),
    });

    const updatedPost = posts.get(0).set('title', 'Test 1 - UPDATED');

    const action = {
      type: 'UPDATE_POST_SUCCESS',
      post: updatedPost,
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts', 0])).to.equal(updatedPost);
    expect(nextState.getIn(['data', 'posts', 1])).to.equal(posts.get(1));
  });

  it('handles DELETE_POST_SUCCESS by removing the post', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0)),
      }),
    });

    const action = {
      type: 'DELETE_POST_SUCCESS',
      postId: posts.get(0).get('id'),
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts'])).to.equal(List());
  });

  it('handles DELETE_POST_SUCCESS by removing one post', () => {
    const initialState = Map({
      data: Map({
        posts: List.of(posts.get(0), posts.get(1)),
      }),
    });

    const action = {
      type: 'DELETE_POST_SUCCESS',
      postId: posts.get(0).get('id'),
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn(['data', 'posts'])).to.equal(List.of(posts.get(1)));
  });
});
