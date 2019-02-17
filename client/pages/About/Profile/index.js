import React from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import color, { fontSet } from '@/share/style';

const ProfileDesc = styled.p`
  color: ${color.desc};
  line-height: 1.4;
  letter-spacing: 0.2px;
  ${fontSet.desc};
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Outline = styled(ProfileDesc)`
  margin: 8px 0;
`;

const Profile = () => (
  <Section title="PROFILE">
    <ProfileDesc>
      I am a passionate self-learner with about 4 year web development
      experience.
    </ProfileDesc>
    <ProfileDesc>
      Enjoy coding and learning new web technologies and love to work in Agile
      development environments.
    </ProfileDesc>
    <Outline>► Focus on React.js(+ES6).</Outline>
    <Outline>► Experienced in Responsive Web Design and CRM system.</Outline>
  </Section>
);

export default Profile;
