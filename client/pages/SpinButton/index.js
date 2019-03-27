import React from 'react';
import styled from 'styled-components';
import color from '@/share/style';
import SpinButton from '@/components/SpinButton';

const Wrap = styled.div`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: ${color.bg};
`;

const SpinButtonPage = () => (
  <Wrap>
    <SpinButton />
  </Wrap>
);

export default SpinButtonPage;
