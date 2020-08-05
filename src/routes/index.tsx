import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from 'src/pages';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
