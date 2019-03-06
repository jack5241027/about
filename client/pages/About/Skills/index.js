import React from 'react';
import styled from 'styled-components';
import RawSection from '@/components/Section';
import SkillItem from '@/components/SkillItem/';

const Section = styled(RawSection)`
  @media print {
    margin-bottom: 100px;
  }
`;

const Skills = () => (
  <Section title="KEY SKILLS">
    <SkillItem title="JavaScript (ES2015+)" />
    <SkillItem title="HTML5" />
    <SkillItem title="CSS3 + Sass" />
    <SkillItem title="styled-components" />
    <SkillItem title="Webpack" />
    <SkillItem title="GraphQL" />
    <SkillItem title="ReactJS + Alt / Redux" />
    <SkillItem title="Jest" />
    <SkillItem title="Enzyme" />
  </Section>
);

export default Skills;
