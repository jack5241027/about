import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Icon from '../SvgIcon';
import { fontSet } from '@/share/style';

const SkillItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.4;
  font-style: oblique;
  & + p {
    margin-top: 10px;
  }
  & + & {
    margin-top: 5px;
  }
`;

const Item = styled.span`
  ${fontSet.item};
`;

const SkillItem = ({ title }) => (
  <SkillItemWrap>
    <Item>{title}</Item>
  </SkillItemWrap>
);

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillItem;
