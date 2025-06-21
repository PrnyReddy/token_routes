<<<<<<< HEAD
# Jupiter Route Visualizer

A Solana dApp that visualizes optimal swap routes between any two SPL tokens using Jupiter’s Quote, Swap, Token, and Price APIs. It renders interactive route graphs (via react-flow), supports swap simulation/execution, and educates users on Jupiter’s deep composability.

## Features

- **Token Selector & Metadata:** Autocomplete selector using Jupiter Token API for mint details.
- **Route Fetch & Parsing:** Calls Jupiter Quote API to retrieve and parse routing JSON.
- **Graph Visualization:** Renders each route as nodes (pools) and edges (token hops) with AMM names/logos.
- **Swap Simulation & Execution:** Uses Swap API to generate unsigned transactions for Phantom signing.
- **Price & Slippage Display:** Shows USD valuations and slippage for each route using Price API.
- **Optional Live Monitoring:** Integrates on-chain swap monitoring via Bitquery or Solana RPC.

## Tech Stack

- **UI:** React + Next.js (TypeScript, SSR)
- **Styling:** TailwindCSS
- **Graph:** react-flow
- **Wallet:** Phantom via @solana/wallet-adapter
- **API:** axios or swr for Jupiter endpoints
- **Component Kits:** jupiverse-kit, Jupiter Dev Tool Kits

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Implementation Plan

- Scaffold Next.js app with TailwindCSS and react-flow.
- Build `<TokenSelector />` using Jupiter Token API.
- Implement route fetch logic and graph renderer.
- Integrate wallet adapter and swap preview/execute.
- Add price insights and live monitoring.
- Follow Jupiter branding guidelines and document in README.

## Resources

- [Jupiter API Docs](https://dev.jup.ag/)
- [Jupiverse Kit](https://github.com/jup-ag/jupiverse-kit)
- [Jupiter Dev Tool Kits](https://dev.jup.ag/tools)
- [react-flow](https://reactflow.dev/)

## License

MIT
=======
# 🪐 Jupiter Router Explorer

Welcome to Jupiter Router Explorer - an advanced visualization and analytics tool for exploring swap routes on Jupiter, Solana's leading liquidity aggregator.

## Overview

Jupiter Router Explorer is a comprehensive tool that helps traders, developers, and liquidity providers visualize, analyze, and optimize token swaps on Solana. By providing deep insights into routing paths, price impact, and execution efficiency, this tool enables users to make better-informed trading decisions.

## Key Features

### 🔄 Interactive Route Visualization
- **Multi-route Comparison**: Compare up to 3 different routes side-by-side
- **Protocol Identification**: See which protocols (Orca, Raydium, etc.) are being used in each hop
- **Price Impact Analysis**: Visual indicators for price impact at each step
- **Animated Token Flow**: Follow the path your tokens take through the DEX ecosystem

### 📊 Advanced Route Analytics
- **Route Statistics**: View metrics on available routes, best/worst rates, and price impact
- **Protocol Usage Breakdown**: See which DEXs handle the most volume for your specific pairs
- **Route Complexity Analysis**: Understand how hop count affects execution and slippage
- **Smart Insights**: Get AI-powered recommendations for optimal trading strategies

### 💱 Enhanced Swap Functionality
- **Slippage Control**: Set custom slippage parameters
- **Transaction Details**: See comprehensive breakdown of fees and price impact
- **High Impact Warnings**: Get alerts for swaps that might significantly move markets
- **Direct TX Linking**: Track your swaps on chain with Explorer links

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/jupiter-router-explorer.git
cd jupiter-router-explorer
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the application

## How It Works

Jupiter Router Explorer leverages Jupiter's Quote API to fetch and visualize optimal routes between tokens. It then presents this data in an intuitive, interactive interface that allows users to:

1. Select input and output tokens
2. View potential routing paths through various liquidity pools
3. Compare efficiency metrics between different routes
4. Execute swaps directly through Jupiter's Swap API

## Architecture

- **Next.js**: React framework for the frontend
- **Tailwind CSS**: For styling
- **ReactFlow**: For interactive route visualization
- **Jupiter API**: For route quotation and swap execution
- **Solana Web3.js**: For blockchain interaction

## Future Enhancements

- [ ] Historical Price Impact Analysis
- [ ] Route Optimization Recommendations
- [ ] MEV Protection Visualization
- [ ] Market Depth Charts
- [ ] Real-time Market Activity Indicators

## Contact

For any questions, feedback or collaboration opportunities, please reach out to us at:
- Twitter: [@YourTwitterHandle](https://twitter.com/yourtwitterhandle)
- Discord: YourDiscordHandle#1234

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the Jupiter Ecosystem during Namaste Jupiverse - Hackathon Edition.
>>>>>>> ea7572a (updates)
