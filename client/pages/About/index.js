import React from 'react';
import styled from 'styled-components';
import Thumbnail from '@/components/Thumbnail/';
import Footer from '@/components/Footer/';
import color from '@/share/style';
import Skills from './Skills';
import EduHistory from './EduHistory';
import WorkHistory from './WorkHistory';
import Profile from './Profile';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 40px;
  background-color: ${color.bg};
  @media print {
    padding-top: 16px;
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  padding: 24px 0;
  padding-bottom: 32px;
  min-width: 320px;
  max-width: 893px;
  background-color: ${color.minorBg};
  box-shadow: 0 0 5px 1px ${color.shadow};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: none;
  }

  @media print {
    width: 100%;
    max-width: none;
    box-shadow: none;
    padding: 0;
  }
`;

const Col = styled.div`
  flex-basis: 35%;
  min-width: 281px;
  padding: 0 16px;

  &:nth-child(1) {
    display: flex;
    flex-direction: column;
    border-right: 1px dashed ${color.border};
  }

  &:nth-child(2) {
    flex-basis: 70%;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    &:nth-child(1) {
      border: none;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
`;

const MobileEduHistory = styled(EduHistory)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DeskEduHistory = styled(EduHistory)`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const About = () => (
  <Wrap>
    <Body>
      <Col>
        <Thumbnail />
        <Profile />
        <Skills />
        <DeskEduHistory />
      </Col>
      <Col>
        <WorkHistory />
        <MobileEduHistory />
      </Col>
      <Footer />
    </Body>
  </Wrap>
);

export default About;
