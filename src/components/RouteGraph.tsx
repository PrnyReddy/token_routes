"use client";
// RouteGraph: Visualizes swap routes using react-flow
import React, { useEffect, useState } from "react";
import type { TokenInfo } from "./TokenSelector";
import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import 'reactflow/dist/style.css';

type RouteGraphProps = {
  inputToken: TokenInfo | null;
  outputToken: TokenInfo | null;
};

type SwapInfo = {
  ammKey: string;
  label: string;
  inputMint: string;
  outputMint: string;
  inAmount: string;
  outAmount: string;
  feeAmount: string;
  feeMint: string;
};

type RoutePlan = {
  swapInfo: SwapInfo;
  percent: number;
};

const RouteGraph: React.FC<RouteGraphProps> = ({ inputToken, outputToken }) => {
  const [routePlan, setRoutePlan] = useState<RoutePlan[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputToken || !outputToken) {
      setRoutePlan(null);
      return;
    }
    setLoading(true);
    const fetchUrl = new URL('https://quote-api.jup.ag/v6/quote');
    fetchUrl.searchParams.append('inputMint', inputToken.address);
    fetchUrl.searchParams.append('outputMint', outputToken.address);
    fetchUrl.searchParams.append('amount', '1000000');
    
    console.log("Fetching route from:", fetchUrl.toString());

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    if (process.env.NEXT_PUBLIC_JUPITER_API_KEY) {
      headers['x-api-key'] = process.env.NEXT_PUBLIC_JUPITER_API_KEY;
    }

    fetch(fetchUrl.toString(), { headers })
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", JSON.stringify(data, null, 2));
        setRoutePlan(data.routePlan || []);
      })
      .catch((error) => {
        console.error("Error fetching route:", error);
      })
      .finally(() => setLoading(false));
  }, [inputToken, outputToken]);

  // Build react-flow nodes and edges from the first route
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  if (routePlan && routePlan.length > 0) {
    // Add input token node
    nodes.push({
      id: "input",
      data: { label: inputToken?.symbol || "Input" },
      position: { x: 0, y: 150 },
      type: "input",
    });
    // Add AMM nodes and edges
    routePlan.forEach((info, i) => {
      const ammNodeId = `amm-${i}`;
      nodes.push({
        id: ammNodeId,
        data: { label: info.swapInfo.label },
        position: { x: 200 + i * 200, y: 100 + (i % 2) * 100 },
      });
      edges.push({
        id: `edge-input-${ammNodeId}`,
        source: i === 0 ? "input" : `amm-${i - 1}`,
        target: ammNodeId,
        label: `${info.percent}%`,
        animated: true,
      });
    });
    // Add output token node
    nodes.push({
      id: "output",
      data: { label: outputToken?.symbol || "Output" },
      position: { x: 200 + routePlan.length * 200, y: 150 },
      type: "output",
    });
    // Edge from last AMM to output
    if (routePlan.length > 0) {
      edges.push({
        id: `edge-last-output`,
        source: `amm-${routePlan.length - 1}`,
        target: "output",
        label: "Output",
        animated: true,
      });
    } else {
      // Direct edge if no hops
      edges.push({
        id: `edge-input-output`,
        source: "input",
        target: "output",
        label: "Direct",
        animated: true,
      });
    }
  }

  return (
    <div className="w-full h-96 border rounded my-4 flex flex-col items-center justify-center">
      {loading && <span className="text-gray-400">Loading routes...</span>}
      {!loading && routePlan && routePlan.length > 0 && (
        <div className="w-full h-full">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      )}
      {!loading && routePlan && routePlan.length === 0 && (
        <span className="text-gray-400">No routes found for selected tokens.</span>
      )}
      {!loading && !routePlan && (
        <span className="text-gray-400">
          {inputToken && outputToken
            ? `No route data yet for ${inputToken.symbol} → ${outputToken.symbol}`
            : "Select tokens to visualize route"}
        </span>
      )}
    </div>
  );
};

export default RouteGraph;