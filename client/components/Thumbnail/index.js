import React from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import ContactItem from '@/components/ContactItem';
import jack from '@/assets/images/jack.png';
import color, { fontSet } from '@/share/style';

const Intro = styled.p`
  text-align: center;
  ${fontSet.desc};
`;

const ThumbnailWrap = styled.figure`
  text-align: center;
  margin-bottom: 8px;
  color: ${color.black};
`;

const Name = styled.p`
  margin-bottom: 8px;
  ${fontSet.title};
`;

const Picture = styled.img`
  width: 90%;
  margin-bottom: 8px;
  max-width: 225px;
`;

const Thumbnail = () => (
  <Section>
    <ThumbnailWrap>
      <Picture src={jack} />
      <Name>Jack Chan</Name>
      <Intro>Frontend Developer</Intro>
    </ThumbnailWrap>
    <ContactItem name="home" subtitle="Taiwan, Taipei" />
    <ContactItem name="email" subtitle="jack5241027@gmail.com" />
    <ContactItem name="github" subtitle="jack5241027" />
  </Section>
);

export default Thumbnail;
