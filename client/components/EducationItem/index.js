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

const Desc = styled.div`
  width: 85%;
  padding-left: 8px;
  ${fontSet.item};
`;

const EducationItem = ({ duration, desc }) => (
  <EducationItemWrap>
    <Duration {...duration} />
    <Desc dangerouslySetInnerHTML={{ __html: desc }} />
  </EducationItemWrap>
);

EducationItem.propTypes = {
  duration: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default EducationItem;
