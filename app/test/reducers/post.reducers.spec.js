import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import PostReducers from '../../src/reducers/post.reducers';

describe('Post reducers', () => {
  it('handles CREATE_POST_SUCCESS by adding a post to an empty list', () => {
    const initialState = Map({
      data: Map({
        posts: List(),
      }),
    });

    const post = fromJS({
      id: '1',
      title: 'Test 1',
      content: 'Lorem ipsum',
      slug: 'test-1',
      published_date: '2017-09-20T01:00:00-0400',
    });

    const action = {
      type: 'CREATE_POST_SUCCESS',
      post,
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn('data', 'posts', 0)).to.equal(post);
  });

  it('handles CREATE_POST_SUCCESS by adding a second post to a list', () => {
    const post1 = fromJS({
      id: '1',
      title: 'Test 1',
      content: 'Lorem ipsum',
      slug: 'test-1',
      published_date: '2017-09-20T01:00:00-0400',
    });

    const post2 = fromJS({
      id: '2',
      title: 'Test 2',
      content: 'Lorem ipsum dolor sit amet',
      slug: 'test-2',
      published_date: '2017-10-20T01:00:00-0400',
    });

    const initialState = Map({
      data: Map({
        posts: List.of(post1),
      }),
    });

    const action = {
      type: 'CREATE_POST_SUCCESS',
      post2,
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState.getIn('data', 'posts', 0)).to.equal(post1);
    expect(nextState.getIn('data', 'posts', 1)).to.equal(post2);
  });

  it('handles CREATE_POST_SUCCESS by not adding the same post twice', () => {
    const post = fromJS({
      id: '1',
      title: 'Test 1',
      content: 'Lorem ipsum',
      slug: 'test-1',
      published_date: '2017-09-20T01:00:00-0400',
    });

    const initialState = Map({
      data: Map({
        posts: List.of(post),
      }),
    });

    const action = {
      type: 'CREATE_POST_SUCCESS',
      post,
    };
    const nextState = PostReducers(initialState, action);

    expect(nextState).to.equal(initialState);
  });
});
