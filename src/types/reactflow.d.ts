declare module "reactflow" {
  import * as React from "react";
  export interface Node {
    id: string;
    data: { label: string };
    position: { x: number; y: number };
    type?: string;
  }
  export interface Edge {
    id: string;
    source: string;
    target: string;
    label?: string;
    animated?: boolean;
  }
  export const Background: React.FC;
  export const Controls: React.FC;
  const ReactFlow: React.FC<{
    nodes: Node[];
    edges: Edge[];
    fitView?: boolean;
    children?: React.ReactNode;
  }>;
  export default ReactFlow;
}