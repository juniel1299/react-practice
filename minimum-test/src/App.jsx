// 계단식 React Flow 트리 구조 구현
import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';

const nodeWidth = 150;
const nodeHeight = 60;
const horizontalGap = 200;
const verticalGap = 100;
const maxPerRow = 4;

const rawNodes = [
  { id: '1', data: { label: '1단계', level: 1 } },
  { id: '2-1', data: { label: '2-1', parent: '1', level: 2 } },
  { id: '2-2', data: { label: '2-2', parent: '1', level: 2 } },
  { id: '2-3', data: { label: '2-3', parent: '1', level: 2 } },
  { id: '3-1', data: { label: '3-1', parent: '2-1', level: 3 } },
  { id: '3-2', data: { label: '3-2', parent: '2-1', level: 3 } },
  { id: '3-3', data: { label: '3-3', parent: '2-1', level: 3 } },
  { id: '4-1', data: { label: '4-1', parent: '3-1', level: 4 } },
  { id: '4-2', data: { label: '4-2', parent: '3-1', level: 4 } },
  { id: '4-3', data: { label: '4-3', parent: '3-1', level: 4 } },
  { id: '4-4', data: { label: '4-4', parent: '3-1', level: 4 } },
  { id: '4-5', data: { label: '4-5', parent: '3-1', level: 4 } },
  { id: '4-6', data: { label: '4-6', parent: '3-1', level: 4 } },
  { id: '4-7', data: { label: '4-7', parent: '3-1', level: 4 } },
  { id: '4-8', data: { label: '4-8', parent: '3-1', level: 4 } },
  { id: '4-9', data: { label: '4-9', parent: '3-1', level: 4 } },
  { id: '5-1', data: { label: '5-1', parent: '4-5', level: 5 } },
  { id: '5-2', data: { label: '5-2', parent: '4-9', level: 5 } }
];

const rawEdges = [
  { source: '1', target: '2-1' },
  { source: '2-1', target: '3-1' },
  { source: '3-1', target: '4-1' },
  { source: '3-1', target: '4-2' },
  { source: '3-1', target: '4-3' },
  { source: '3-1', target: '4-4' },
  { source: '3-1', target: '4-5' },
  { source: '3-1', target: '4-6' },
  { source: '3-1', target: '4-7' },
  { source: '3-1', target: '4-8' },
  { source: '3-1', target: '4-9' },
  { source: '4-5', target: '5-1' },
  { source: '4-9', target: '5-2' }
].map((edge, index) => ({
  id: `e${index}`,
  ...edge,
  type: 'step',
  sourcePosition: 'bottom',
  targetPosition: 'left',
  markerEnd: { type: MarkerType.ArrowClosed }
}));

function FlowChart() {
  const [collapsedMap, setCollapsedMap] = useState({});
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const getChildren = (id) => rawNodes.filter(n => n.data.parent === id);
  const getDescendants = (id) => {
    const children = getChildren(id);
    return [...children, ...children.flatMap(c => getDescendants(c.id))];
  };

  const layoutNodes = (visibleIds) => {
    const levelMap = {};
    visibleIds.forEach(id => {
      const node = rawNodes.find(n => n.id === id);
      const level = node.data.level;
      if (!levelMap[level]) levelMap[level] = [];
      levelMap[level].push(node);
    });

    const positioned = [];
    Object.keys(levelMap).sort((a, b) => +a - +b).forEach(levelStr => {
      const level = +levelStr;
      const group = levelMap[level];
      group.forEach((node, index) => {
        const row = Math.floor(index / maxPerRow);
        const col = index % maxPerRow;
        const isLeaf = !rawNodes.some(n => n.data.parent === node.id);
        positioned.push({
          ...node,
          position: {
            x: isLeaf ? col * horizontalGap + level * 100 : level * 200,
            y: isLeaf ? (level - 1) * verticalGap + row * 100 : row * 120
          },
          //draggable: false
        });
      });
    });
    return positioned;
  };

  const updateView = (collapsed) => {
    const visible = new Set();
    const visit = (node) => {
      visible.add(node.id);
      if (collapsed[node.id]) {
        const children = getChildren(node.id);
        children.forEach(visit);
      }
    };
    visit(rawNodes[0]); // root = '1'
    const visibleNodes = Array.from(visible);
    setNodes(layoutNodes(visibleNodes));
    setEdges(rawEdges.filter(e => visible.has(e.source) && visible.has(e.target)));
  };

  const onNodeDoubleClick = useCallback((_, node) => {
    const isOpen = collapsedMap[node.id];
    const newMap = { ...collapsedMap };

    if (!isOpen) newMap[node.id] = true;
    else {
      newMap[node.id] = false;
      getDescendants(node.id).forEach(d => newMap[d.id] = false);
    }
    setCollapsedMap(newMap);
    updateView(newMap);
  }, [collapsedMap]);

  useEffect(() => {
    const initial = { '1': true }; // open root
    setCollapsedMap(initial);
    updateView(initial);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeDoubleClick={onNodeDoubleClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        //nodesDraggable={false}
        nodesConnectable={false}
        fitView
      >
      </ReactFlow>
    </div>
  );
}

export default FlowChart;
