import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PostListContainer } from '../containers/Post/PostList.container';
import { PostViewContainer } from '../containers/Post/PostView.container';
import { PostEditContainer } from '../containers/Post/PostEdit.container';

// Possibilité d'améliorer en suivant: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
export default (
  <Route path="/">
    <Switch>
      <Route path="/posts/:id/edit" component={PostEditContainer} />
      <Route path="/posts/:id" component={PostViewContainer} />
      <Route path="/posts" component={PostListContainer} />
    </Switch>
  </Route>
);
