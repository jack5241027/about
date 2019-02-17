import React from 'react';
import { createGlobalStyle } from 'styled-components';
import normalize from './style/normalize.scss';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const App = ({ children }) => (
  <React.Fragment>
    {children}
    <GlobalStyle />
  </React.Fragment>
);

export default App;
