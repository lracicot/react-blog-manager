import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { render } from 'react-dom';

import configureStore from './configureStore';
import { setState } from './actions/app.actions';
import Root from './containers/App/root.component';

require('babel-core/register');
require('babel-polyfill');


/**
  * Index - Open the application
  */
(async () => {
  const store = configureStore();
  const initialState = fromJS({
    data: {
      posts: [{ id: 1, title: 'First post', published_date: '2017-01-01 23:45:00' }],
    },
  });

  store.dispatch(setState(initialState));

  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('app'),
  );
})();
