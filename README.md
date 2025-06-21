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
