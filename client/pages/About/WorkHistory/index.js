import React from 'react';
import styled from 'styled-components';
import RawSection from '@/components/Section';
import WorksItem from '@/components/WorksItem/';
import color from '@/share/style';
import workHistory from './data';

const Section = styled(RawSection)`
  @media screen and (max-width: 768px) {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px dashed ${color.border};
  }
`;

const WorkHistory = () => (
  <Section title="WORK EXPERIENCE">
    {workHistory.map(props => (
      <WorksItem {...props} />
    ))}
  </Section>
);

export default WorkHistory;
