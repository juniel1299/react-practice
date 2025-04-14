import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', data: { label: '1레벨' }, position: { x: 0, y: 0 } },

  { id: '2-1', data: { label: '2-1레벨' }, position: { x: 100, y: 100 }, parent: '1' },
  { id: '2-2', data: { label: '2-2레벨' }, position: { x: 220, y: 100 }, parent: '1' },
  { id: '2-3', data: { label: '2-3레벨' }, position: { x: 340, y: 100 }, parent: '1' },

  { id: '3-1', data: { label: '3-1레벨' }, position: { x: 200, y: 200 }, parent: '2-1' },
  { id: '3-2', data: { label: '3-2레벨' }, position: { x: 320, y: 200 }, parent: '2-1' },
  { id: '3-3', data: { label: '3-3레벨' }, position: { x: 440, y: 200 }, parent: '2-1' },
];

const initialEdges = [
  {
    id: 'e1-2-1',
    source: '1',
    target: '2-1',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-1-3-1',
    source: '2-1',
    target: '3-1',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [collapsedNodes, setCollapsedNodes] = useState([]);

  // 자식 노드 재귀 탐색
  const getAllDescendants = (parentId) => {
    const children = nodes.filter(n => n.parent === parentId).map(n => n.id);
    const deeper = children.flatMap(id => getAllDescendants(id));
    return [...children, ...deeper];
  };

  const getMaxYOfDescendants = (ids) => {
    const visibleDescendants = nodes.filter(n => ids.includes(n.id) && !n.hidden);
    if (visibleDescendants.length === 0) return 0;

    const ys = visibleDescendants.map(n => n.position.y);
    return Math.max(...ys) - Math.min(...ys) + 100; // 대략 높이 추정
  };

  const onNodeDoubleClick = useCallback((_, node) => {
    const isCollapsed = collapsedNodes.includes(node.id);
    const descendants = getAllDescendants(node.id);
    const heightToAdjust = getMaxYOfDescendants(descendants);

    setNodes((nds) =>
      nds.map((n) => {
        if (descendants.includes(n.id)) {
          return { ...n, hidden: !isCollapsed };
        }

        if (!descendants.includes(n.id) && n.position.y > node.position.y) {
          return {
            ...n,
            position: {
              ...n.position,
              y: isCollapsed
                ? n.position.y + heightToAdjust
                : n.position.y - heightToAdjust,
            },
          };
        }

        return n;
      })
    );

    setCollapsedNodes((prev) =>
      isCollapsed
        ? prev.filter((id) => id !== node.id)
        : [...prev, node.id]
    );
  }, [nodes, collapsedNodes]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDoubleClick={onNodeDoubleClick}
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