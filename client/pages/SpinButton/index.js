import React from 'react';
import styled from 'styled-components';
import color from '@/share/style';
import SpinButton from '@/components/SpinButton';
import SpinLimitButton from '@/components/SpinLimitButton';

const Wrap = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: ${color.bg};
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  height: fit-content;
`;

const SpinButtonPage = () => (
  <Wrap>
    <Container>
      <SpinButton />
      <SpinLimitButton />
    </Container>
  </Wrap>
);

export default SpinButtonPage;
