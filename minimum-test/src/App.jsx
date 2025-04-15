import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';

const horizontalGap = 200;
const verticalGap = 100;
const maxPerRow = 4;
const maxPerBlock = 8;

// 가로 정렬 + 들여쓰기 + 4개 초과 시 줄바꿈, 8개 초과 시 블록당 y 보정
function getIndentedHorizontalLayout(nodes) {
  const levelMap = {};
  nodes.forEach((node) => {
    const level = node.data.level || 1;
    if (!levelMap[level]) levelMap[level] = [];
    levelMap[level].push(node);
  });

  const layoutedNodes = [];

  Object.keys(levelMap).sort((a, b) => +a - +b).forEach((levelStr) => {
    const level = parseInt(levelStr);
    const group = levelMap[level];
    group.forEach((node, index) => {
      const blockIndex = Math.floor(index / maxPerBlock);
      const rowInBlock = Math.floor((index % maxPerBlock) / maxPerRow);
      const col = index % maxPerRow;
      layoutedNodes.push({
        ...node,
        position: {
          x: col * horizontalGap + (level - 1) * 100, // 들여쓰기 적용
          y: (level - 1) * verticalGap + rowInBlock * 100 + blockIndex * 100, // 블록별 y 보정
        },
        //draggable: false,
        selectable: false,
      });
    });
  });

  return layoutedNodes;
}

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
];

const rawEdges = [
  { id: 'e1-2-1', source: '1', target: '2-1' },
  { id: 'e2-1-3-1', source: '2-1', target: '3-1' },
  { id: 'e3-1-4-1', source: '3-1', target: '4-1' },
].map((edge) => ({
  ...edge,
  type: 'step',
  sourcePosition: 'bottom',
  targetPosition: 'left',
  markerEnd: { type: MarkerType.ArrowClosed },
}));

function FlowChart() {
  const [collapsedMap, setCollapsedMap] = useState({});
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const getDirectChildren = (id, level) => rawNodes.filter(
    (n) => n.data.parent === id && n.data.level === level + 1
  ).map((n) => n.id);

  const getAllDescendants = (id) => {
    const children = rawNodes.filter(n => n.data.parent === id).map(n => n.id);
    const deeper = children.flatMap(getAllDescendants);
    return [...children, ...deeper];
  };

  const toggleChildren = useCallback((node) => {
    const nodeId = node.id;
    const nodeLevel = node.data.level;
    const nextLevel = nodeLevel + 1;

    const isCollapsed = collapsedMap[nodeId];
    const directChildren = getDirectChildren(nodeId, nodeLevel);
    const allDescendants = getAllDescendants(nodeId);

    let updatedNodes = nodes.map((n) => {
      if (directChildren.includes(n.id)) {
        return { ...n, hidden: !isCollapsed };
      } else if (allDescendants.includes(n.id)) {
        return { ...n, hidden: true };
      }
      return n;
    });

    rawNodes.forEach((raw) => {
      if (directChildren.includes(raw.id) && !nodes.find(n => n.id === raw.id)) {
        updatedNodes.push({ ...raw, hidden: false });
      }
    });

    const visibleIds = updatedNodes.filter(n => !n.hidden).map(n => n.id);
    const visibleEdges = rawEdges.filter(e =>
      visibleIds.includes(e.source) && visibleIds.includes(e.target)
    );

    const layouted = getIndentedHorizontalLayout(updatedNodes);
    setNodes([...layouted]);
    setEdges([...visibleEdges]);

    setCollapsedMap((prev) => ({ ...prev, [nodeId]: !isCollapsed }));
  }, [collapsedMap, nodes]);

  const onNodeDoubleClick = useCallback((_, node) => {
    const isLeaf = !rawNodes.some(n => n.data.parent === node.id);
    if (isLeaf) return;
    toggleChildren(node);
  }, [toggleChildren]);

  useEffect(() => {
    const level1 = rawNodes.filter(n => n.data.level === 1);
    const layouted = getIndentedHorizontalLayout(level1);
    setNodes([...layouted]);
    setEdges([]);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeDoubleClick={onNodeDoubleClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        //nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default FlowChart;
