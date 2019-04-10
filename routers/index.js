import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import history from '~/history';
import About from '@/pages/About';
import Calculator from '@/pages/Calculator';
import SpinButton from '@/pages/SpinButton';
import Validator from '@/pages/Validator';
import Hierarchy from '@/pages/Hierarchy';
import App from '@/App';

const route = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/about/p-calculator" component={Calculator} />
        <Route path="/about/p-spin-button" component={SpinButton} />
        <Route path="/about/p-validator" component={Validator} />
        <Route path="/about/p-hierarchy" component={Hierarchy} />
        <Route path="/" component={About} />
      </Switch>
    </App>
  </Router>
);

export default hot(route);
