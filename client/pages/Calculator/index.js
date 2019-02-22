import React from 'react';
import styled from 'styled-components';
import color from '@/share/style';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 40px;
  background-color: ${color.bg};
  @media print {
    padding-top: 16px;
  }
`;

const Calculator = () => <Wrap>Calculator</Wrap>;

export default Calculator;
