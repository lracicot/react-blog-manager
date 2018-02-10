
import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import configureStore from './configureStore';
import { setState } from './actions/app.actions';
import Main from './containers/App/main.component';
import App from './containers/App/app.component';

require("babel-core/register");
require("babel-polyfill");


/**
  * Index - Open the application
  */
(async () => {
  const store = configureStore();
  const initialState = fromJS({
    data: {
      posts: [
        { id: 1, title: 'First post', published_date: '2017-01-01' },
        { id: 2, title: 'Second post', published_date: '2017-01-02' },
        { id: 3, title: 'Third post', published_date: '2017-01-03' },
        { id: 4, title: 'Fourth post', published_date: '2017-01-04' },
        { id: 5, title: 'Fifth post', published_date: '2017-01-05' },
        { id: 6, title: 'Sixth post', published_date: '2017-01-06' },
        { id: 7, title: 'Seventh post', published_date: '2017-01-07' },
      ],
    },
  });

  store.dispatch(setState(initialState));

  const rendr = (component) => {
    render(
      <Provider store={store}>
        {component}
      </Provider>,
      document.getElementById('app'),
    );
  };

  const app = (
    <App>
      <Main />
    </App>
  );

  rendr(app);
})();
