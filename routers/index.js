import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import history from '~/history';
import About from '@/pages/About';
import App from '@/App';

const route = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    </App>
  </Router>
);

export default hot(route);
