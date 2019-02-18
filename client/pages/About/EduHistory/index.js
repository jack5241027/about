import React from 'react';
import Section from '@/components/Section';
import EducationItem from '@/components/EducationItem/';

const eduHistory = [
  {
    duration: {
      from: '2011',
      to: '2013',
    },
    desc: {
      title: 'Master',
      subTitle: 'Automatic Control Engineering',
      content: 'Feng Chia University',
    },
  },
];

const EduHistory = props => (
  <Section title="EDUCATIONS" {...props}>
    {eduHistory.map(({ duration, desc }, idx) => (
      <EducationItem key={duration.from} duration={duration} desc={desc} />
    ))}
  </Section>
);

export default EduHistory;
