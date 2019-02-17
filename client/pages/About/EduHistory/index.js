import React from 'react';
import Section from '@/components/Section';
import Duration from '@/components/Duration';
import EducationItem from '@/components/EducationItem/';

const eduHistory = [
  {
    duration: {
      from: '2011',
      to: '2013',
    },
    desc: `
      Master<br />
      Automatic Control Engineering<br />
      Feng Chia University.
    `,
  },
];

const EduHistory = props => (
  <Section title="EDUCATIONS" {...props}>
    {eduHistory.map(({ duration, desc }) => (
      <EducationItem duration={duration} desc={desc} />
    ))}
  </Section>
);

export default EduHistory;
