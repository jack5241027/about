import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Duration from '@/components/Duration';
import { fontSet } from '@/share/style';

const EducationItemWrap = styled.div`
  display: flex;
  font-size: 13px;
  margin: 10px 0;
  line-height: 1.2;
`;

const DescWrap = styled.div`
  width: 85%;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  ${fontSet.item};
`;

const EducationItem = ({ duration, desc: { title, subTitle, content } }) => (
  <EducationItemWrap>
    <Duration {...duration} />
    <DescWrap>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
      <Text>{content}</Text>
    </DescWrap>
  </EducationItemWrap>
);

EducationItem.propTypes = {
  duration: PropTypes.shape({}),
  desc: PropTypes.shape({}),
};

export default EducationItem;
