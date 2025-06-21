import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "../components/WalletProvider";

<<<<<<< HEAD
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jupiter Route Visualizer",
  description: "Visualize Jupiter swap routes",
=======
const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Jupiter Router Explorer | Advanced Swap Route Visualization",
  description: "Discover and visualize the optimal swap routes on Jupiter - Solana's leading liquidity aggregator",
  keywords: "Jupiter, Solana, DeFi, Swap, Routing, Visualization, Trading, Crypto",
  authors: [{ name: "Jupiter Route Explorer Team" }],
  viewport: "width=device-width, initial-scale=1",
>>>>>>> ea7572a (updates)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
=======
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} h-full`}>
>>>>>>> ea7572a (updates)
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
