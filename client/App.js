import React from 'react';
import { createGlobalStyle } from 'styled-components';
import normalize from './style/normalize.scss';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

class App extends React.Component {
  componentDidMount() {
    this.setVh();
    window.addEventListener('resize', this.setVh);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setVh);
  }

  setVh = () => {
    // Ref: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
