import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div``;

const ErrorText = ({ show, text }) => <Wrap>{show ? text : ''}</Wrap>;

ErrorText.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
};

export default ErrorText;
