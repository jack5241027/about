/* eslint-disable no-param-reassign */
import d3 from 'd3';

const RADIUS = 12;

const draw = (target, data, dom, style) =>
  target
    .data(data)
    .enter()
    .append(dom)
    .attr({
      ...style,
      stroke: '#ccc',
      'stroke-width': '2',
    });

const drawLine = (target, data) =>
  draw(target, data, 'line', {
    x1: d => d.p1.x,
    y1: d => d.p1.y,
    x2: d => d.p2.x,
    y2: d => d.p2.y,
  });

const drawCircle = (target, data) =>
  draw(target, data, 'circle', {
    r: RADIUS,
    cx: d => d.x,
    cy: d => d.y,
    fill: '#fff',
  });

const getChildCount = (node) => {
  if (node.childList.length === 0) return 1;
  return node.childList.map(getChildCount).reduce((a, b) => a + b);
};

const parseGroupToTree = (groups) => {
  const result = groups.map(({ group, subGroups }) => ({
    id: group.id,
    position: {},
    childList: parseGroupToTree(subGroups),
  }));
  return result.sort((a, b) => a.id - b.id);
};

const drawTree = ({ graphNode, graph, size }) => {
  let nodePos = [];
  let linePos = [];
  let container = null;

  const tree = {
    width: 50,
    height: 50,
    pos: {
      id: 0,
      position: { x: size.width / 2, y: 50 },
      childList: parseGroupToTree(graph),
    },
  };

  const zoom = d3.behavior
    .zoom()
    .translate([0, 0])
    .scaleExtent([1, 10])
    .scale(1)
    .on('zoom', () => {
      container.attr(
        'transform',
        `translate(${d3.event.translate}) scale(${d3.event.scale})`
      );
    });

  container = d3
    .select(graphNode)
    .append('svg')
    .call(zoom)
    .attr('width', size.width)
    .attr('height', size.height)
    .append('g');

  const line = container
    .append('g')
    .attr('id', 'g_lines')
    .selectAll('line');

  const circle = container
    .append('g')
    .attr('id', 'g_circles')
    .selectAll('circle');

  const calcPosition = ((n, i) => {
    const ref = (node, id) => {
      const childCount = getChildCount(node);
      let left = node.position.x - ((tree.width * (childCount - 1)) / 2);

      const nodePath = node.parent === undefined ? id : `${node.path}.${id}`;

      nodePos.push({
        id: node.id,
        label: node.name,
        path: nodePath,
        x: node.position.x,
        y: node.position.y,
        fixed: true,
      });

      if (parseInt(node.id, 10) !== 0) {
        linePos.push({
          parentID: node.parent.id,
          id: node.id,
          p1: node.parent.position,
          p2: node.position,
          source: { x: node.parent.position.x, y: node.parent.position.y },
          target: { x: node.position.x, y: node.position.y },
        });
      }

      node.childList.forEach((child, nodeIdx) => {
        const w = tree.width * getChildCount(child);
        left += w;
        const x = left - ((w + tree.width) / 2);
        const y = node.position.y + tree.height;
        child.position = { x, y };
        child.parent = node;
        child.path = nodePath;
        ref(child, nodeIdx);
      });
    };

    ref(n, i);

    return ref;
  })(tree.pos, 0);

  // NOTE: Maybe one day can try use force.
  // const tick = () => {
  //   circle.attr({
  //     cx: d => d.x,
  //     cy: d => d.y,
  //     id: d => d.id,
  //   });
  //   line
  //     .attr('x1', d => d.source.x)
  //     .attr('y1', d => d.source.y)
  //     .attr('x2', d => d.target.x)
  //     .attr('y2', d => d.target.y);
  // };

  // const force = d3.layout
  //   .force()
  //   .size([size.width, size.height])
  //   .on('tick', tick)
  //   .links(linePos)
  //   .nodes(nodePos)
  //   .linkDistance(({ source, target }) => {
  //     const x = Math.abs(source.x - target.x);
  //     const y = Math.abs(source.y - target.y);
  //     return Math.sqrt((x ** 2) + (y ** 2));
  //   })
  //   .start();

  const nodeClick = (node) => {
    let curNode = null;
    nodePos = [];
    linePos = [];

    if (node.path === 0) {
      curNode = tree.pos;
    } else {
      const path = node.path.split('.').slice(1);
      curNode = path.reduce((child, p) => child.childList[p], tree.pos);
    }

    curNode.childList.push({
      id: curNode.id + 1,
      position: {},
      childList: [],
    });

    calcPosition(tree.pos, 0);

    const newCircle = d3.select('#g_circles').selectAll('circle');

    // move old node
    newCircle
      .data(nodePos)
      .transition()
      .duration(500)
      .attr({
        r: RADIUS,
        cx: d => d.x,
        cy: d => d.y,
      });

    // append new node
    drawCircle(newCircle, nodePos)
      .on('click', nodeClick)
      .transition()
      .duration(500);

    const newLine = d3.select('#g_lines').selectAll('line');

    // move old line
    newLine
      .data(linePos)
      .transition()
      .duration(500)
      .attr({
        x1: d => d.p1.x,
        y1: d => d.p1.y,
        x2: d => d.p2.x,
        y2: d => d.p2.y,
        stroke: '#ccc',
        'stroke-width': '2',
      });

    // append new line
    drawLine(newLine, linePos)
      .on('click', nodeClick)
      .transition()
      .duration(500);
  };

  drawLine(line, linePos);

  drawCircle(circle, nodePos).on('click', nodeClick);
};

export default drawTree;
