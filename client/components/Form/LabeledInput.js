import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrap = styled.div`
  display: flex;
  margin: 8px 0;
`;

const Span = styled.span`
  flex: 0 0 30%;
`;

const LabeledInput = ({ label, children, ...props }) => (
  <React.Fragment>
    <InputWrap {...props}>
      <Span>{label}</Span>
      {children}
    </InputWrap>
  </React.Fragment>
);

LabeledInput.propTypes = {
  label: PropTypes.string,
};

export default LabeledInput;
