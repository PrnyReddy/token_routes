"use client";
import React, { useState } from "react";
import TokenSelector from "../components/TokenSelector";
import RouteGraph from "../components/RouteGraph";
import SwapPanel from "../components/SwapPanel";

type TokenInfo = {
  address: string;
  symbol: string;
  name: string;
  logoURI: string;
  decimals: number;
};

export default function Home() {
  const [inputToken, setInputToken] = useState<TokenInfo | null>(null);
  const [outputToken, setOutputToken] = useState<TokenInfo | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
        Jupiter Route Visualizer
      </h1>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <TokenSelector label="From" onSelect={setInputToken} />
          </div>
          <div className="flex-1">
            <TokenSelector label="To" onSelect={setOutputToken} />
          </div>
        </div>
        <RouteGraph inputToken={inputToken} outputToken={outputToken} />
        <SwapPanel inputToken={inputToken} outputToken={outputToken} />
      </div>
      <footer className="mt-8 text-xs text-gray-400 text-center">
        Powered by Jupiter Aggregator &bull; Solana Hackathon Demo
      </footer>
    </div>
  );
}
