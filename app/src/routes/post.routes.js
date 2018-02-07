import React from 'react';
import { Route } from 'react-router-dom';

import { PostListContainer } from '../containers/Post/PostList.container';
import { PostViewContainer } from '../containers/Post/PostView.container';

export default (
  <Route path="/">
    <div>
      <Route path="/posts" component={PostListContainer} />
      <Route path="/posts/:id" component={PostViewContainer} />
    </div>
  </Route>
);
