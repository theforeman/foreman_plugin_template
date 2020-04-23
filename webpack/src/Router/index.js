import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

const Router = () => (
  <Switch>
    {Object.entries(routes).map(([key, props]) => (
      <Route key={key} {...props} />
    ))}
  </Switch>
);

export default Router;
