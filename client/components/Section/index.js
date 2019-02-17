import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from '@/share/style';

const SectionWrap = styled.section`
  overflow: hidden;
  & + & {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px dashed ${color.border};
  }
`;

const Title = styled.h2`
  margin-bottom: 8px;
`;

const Content = styled.div`
  display: inline-block;
  padding: 0 8px;
  width: 100%;
  line-height: 1.2;
  color: ${color.desc};
`;

const Section = ({ title, children, ...rest }) => (
  <SectionWrap {...rest}>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.objectOf({}).isRequired,
};

export default Section;
