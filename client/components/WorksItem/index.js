import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Duration from '@/components/Duration';
import color, { fontSet } from '@/share/style';

const WorksItemWrap = styled.div`
  display: flex;
  & + & {
    margin-top: 16px;
  }

  &:last-child {
    margin-bottom: 16px;
  }
`;

const DiverderWrap = styled.div`
  position: relative;
  width: 5%;
  margin: 0 8px;
`;

const Diverder = styled.div`
  position: absolute;
  top: 17px;
  bottom: 0;
  left: 50%;
  width: 5px;
  margin-left: -2.5px;
  background-color: ${color.green};

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -3px;
    margin: 3.9px auto;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${color.green};
  }
`;

const ContentWrap = styled.dl`
  width: 80%;
  ${fontSet.item};
`;

const SubItemWrap = styled.ul`
  padding: 0;
  margin: 0;
  & + & {
    margin-top: 8px;
  }
`;

const Item = styled.dt`
  position: relative;
  text-indent: 12px;

  &:before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${color.desc};
  }
`;

const SubItem = styled.li`
  position: relative;
  margin-left: 24px;
  list-style: none;

  &:before {
    content: '-';
    position: absolute;
    left: -12px;
  }
`;

const Desc = styled.p`
  margin-bottom: 8px;
  color: ${color.desc};
`;

const Title = styled.h3`
  margin-bottom: 8px;
  ${fontSet.outline};
  color: ${color.black};
`;

const WorksItem = ({ duration, title, desc, items }) => (
  <WorksItemWrap>
    <Duration {...duration} />
    <DiverderWrap>
      <Diverder />
    </DiverderWrap>
    <ContentWrap>
      <Title>{title}</Title>
      <Desc dangerouslySetInnerHTML={{ __html: desc }} />
      {items.map(({ title: itemTitle, subItems = [] }) => (
        <SubItemWrap>
          <Item dangerouslySetInnerHTML={{ __html: itemTitle }} />
          {subItems.map(sub => (
            <SubItem>{sub}</SubItem>
          ))}
        </SubItemWrap>
      ))}
    </ContentWrap>
  </WorksItemWrap>
);

WorksItem.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default WorksItem;
