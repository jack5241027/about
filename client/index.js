import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Route from '../routers';

const target = document.getElementById('root');

ReactDOM.render(<Route />, target);
