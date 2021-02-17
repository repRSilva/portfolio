import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
