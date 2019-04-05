import React from 'react';
import styled from 'styled-components';
import color from '@/share/style';
import Form from '@/components/Form';
import SimpleForm from '@/components/Form/SimpleForm';

const Wrap = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: ${color.bg};
`;

const SpinButtonPage = () => (
  <Wrap>
    <Form />
    <SimpleForm />
  </Wrap>
);

export default SpinButtonPage;
