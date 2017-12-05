import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import * as Routes from '../../routes';


export default function Root() {
  return (
    <Router>
      <Switch>
        {Routes.PostRoutes}
      </Switch>
    </Router>
  );
}
