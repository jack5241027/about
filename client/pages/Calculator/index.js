import React from 'react';
import styled from 'styled-components';
import color from '@/share/style';
import Calculator from '@/components/Calculator';

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  background-color: ${color.bg};
`;

const CalculatorPage = () => (
  <Wrap>
    <Calculator />
  </Wrap>
);

export default CalculatorPage;
