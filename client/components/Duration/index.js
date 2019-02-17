import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color, { fontSet } from '@/share/style';

const DurationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  min-width: 15%;
  color: ${color.black};
  ${fontSet.outline};
  span + span {
    margin-top: 8px;
  }
  span:nth-child(2) {
    color: ${color.green};
  }
`;

const WorksItem = ({ from, to }) => (
  <DurationWrap>
    <span>{from}</span>
    <span>|</span>
    <span>{to}</span>
  </DurationWrap>
);

WorksItem.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default WorksItem;
