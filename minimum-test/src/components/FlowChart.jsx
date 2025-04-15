import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
  MarkerType
} from 'reactflow';
import dagre from 'dagre';
import 'reactflow/dist/style.css';

const nodeWidth = 150;
const nodeHeight = 60;
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

// 1. dagre 배치 + y 위치 조정
function getLayoutedElements(nodes, edges, direction = 'TB') {
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  // y 위치 보정: 부모 기준, 자식 인덱스가 4 이상이면 y += 100 * (그룹 번호)
  const groupedByParent = {};
  nodes.forEach((n) => {
    if (!n.data.parent) return;
    if (!groupedByParent[n.data.parent]) groupedByParent[n.data.parent] = [];
    groupedByParent[n.data.parent].push(n.id);
  });

  const layoutedNodes = nodes.map((node) => {
    const { x, y } = dagreGraph.node(node.id);
    let adjustedY = y;

    if (node.data.parent) {
      const siblings = groupedByParent[node.data.parent];
      const index = siblings.indexOf(node.id);
      const extraGroup = Math.floor(index / 4);
      if (extraGroup > 0) adjustedY += extraGroup * 100;
    }

    return {
      ...node,
      position: { x, y: adjustedY },
      //draggable: false,
      selectable: false,
    };
  });

  return { nodes: layoutedNodes, edges };
}

// 2. 트리 구조 정의
const rawNodes = [
  { id: '1', data: { label: '1단계', level: 1 } },
  { id: '2-1', data: { label: '2-1', parent: '1', level: 2 } },
  { id: '2-2', data: { label: '2-2', parent: '1', level: 2 } },
  { id: '2-3', data: { label: '2-3', parent: '1', level: 2 } },
  { id: '2-4', data: { label: '2-4', parent: '1', level: 2 } },
  { id: '2-5', data: { label: '2-5', parent: '1', level: 2 } },
  { id: '3-1', data: { label: '3-1', parent: '2-1', level: 3 } },
  { id: '3-2', data: { label: '3-2', parent: '2-1', level: 3 } },
  { id: '3-3', data: { label: '3-3', parent: '2-1', level: 3 } },
];

const rawEdges = [
  { id: 'e1-2-1', source: '1', target: '2-1', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e1-2-2', source: '1', target: '2-2', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e1-2-3', source: '1', target: '2-3', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e1-2-4', source: '1', target: '2-4', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e1-2-5', source: '1', target: '2-5', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-1-3-1', source: '2-1', target: '3-1', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-1-3-2', source: '2-1', target: '3-2', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-1-3-3', source: '2-1', target: '3-3', type: 'step', markerEnd: { type: MarkerType.ArrowClosed } },
];

function FlowChart() {
  const [collapsedMap, setCollapsedMap] = useState({});
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // 특정 노드의 바로 아래 자식만 반환
  const getDirectChildren = useCallback((id, level) => {
    return rawNodes.filter(
      (n) => n.data.parent === id && n.data.level === level + 1
    ).map((n) => n.id);
  }, []);

  // 특정 노드 기준 하위 전부
  const getAllDescendants = useCallback((id) => {
    const children = rawNodes.filter(n => n.data.parent === id).map(n => n.id);
    const deeper = children.flatMap(getAllDescendants);
    return [...children, ...deeper];
  }, []);

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
        return { ...n, hidden: true }; // 그보다 더 하위는 항상 숨김
      }
      return n;
    });

    // 없던 노드 새로 추가
    rawNodes.forEach((raw) => {
      if (directChildren.includes(raw.id) && !nodes.find(n => n.id === raw.id)) {
        updatedNodes.push({ ...raw, hidden: false });
      }
    });

    const visibleIds = updatedNodes.filter(n => !n.hidden).map(n => n.id);
    const visibleEdges = rawEdges.filter(e =>
      visibleIds.includes(e.source) && visibleIds.includes(e.target)
    );

    const layouted = getLayoutedElements(updatedNodes, visibleEdges);
    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    setCollapsedMap((prev) => ({ ...prev, [nodeId]: !isCollapsed }));
  }, [collapsedMap, nodes]);

  // 노드 더블클릭 핸들러
  const onNodeDoubleClick = useCallback((_, node) => {
    const isLeaf = !rawNodes.some(n => n.data.parent === node.id);
    if (isLeaf) return; // 말단 노드는 이벤트 없음
    toggleChildren(node);
  }, [toggleChildren]);

  useEffect(() => {
    // 초기 상태: 레벨 1만 표시
    const level1 = rawNodes.filter(n => n.data.level === 1);
    const layouted = getLayoutedElements(level1, []);
    setNodes([...layouted.nodes]);
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