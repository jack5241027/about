import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tree from './drawTree';

const data = [
  {
    group: { id: '7', name: 'TW' },
    subGroups: [],
  },
  {
    group: { id: '9', name: 'test-1' },
    subGroups: [
      {
        group: {
          id: '11',
          name: 'test1-1',
        },
        subGroups: [],
      },
    ],
  },
  {
    group: { id: '10', name: 'test-2' },
    subGroups: [
      {
        group: {
          id: '13',
          name: 'test2-1',
          isDeleted: false,
        },
        subGroups: [],
      },
    ],
  },
  {
    group: { id: '12', name: 'test-3' },
    subGroups: [
      {
        group: { id: '14', name: 'test3-1' },
        subGroups: [],
      },
    ],
  },
];

const GraphWrap = styled.div`
  height: 50vh;
  width: 50vh;
  margin: 0 auto;
  overflow: scroll;
  border: 1px solid #ccc;
`;

const HierarchyWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Hierarchy extends React.Component {
  constructor(props) {
    super(props);
    this.area = React.createRef();
  }
  componentDidMount() {
    tree({
      size: this.getGraphSize(),
      graphNode: this.area.current,
      graph: data,
    });

    window.addEventListener('resize', this.handleResize, false);
  }

  getGraphSize = () => {
    const { height, width } = window.getComputedStyle(this.area.current);
    return { height: parseFloat(height), width: parseFloat(width) };
  };

  render() {
    return (
      <HierarchyWrap>
        <GraphWrap ref={this.area} />
      </HierarchyWrap>
    );
  }
}

Hierarchy.propTypes = {};

export default Hierarchy;
