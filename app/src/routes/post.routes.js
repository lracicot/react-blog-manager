import React from 'react';
import { Route } from 'react-router-dom';

import { PostListContainer } from '../containers/PostList/PostList.container';

export default (
  <Route path="/">
    <Route path="/posts" component={PostListContainer} />
  </Route>
);
