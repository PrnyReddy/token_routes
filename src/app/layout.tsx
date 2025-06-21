/**
 * Root layout component for the Next.js application.
 * - Sets up global metadata for SEO and browser configuration.
 * - Applies the Inter font and global styles.
 * - Wraps all pages with the AppWalletProvider for wallet context.
 * - Ensures consistent HTML structure and dark mode support.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "../components/WalletProvider";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Jupiter Router Explorer | Advanced Swap Route Visualization",
  description: "Discover and visualize the optimal swap routes on Jupiter - Solana's leading liquidity aggregator",
  keywords: "Jupiter, Solana, DeFi, Swap, Routing, Visualization, Trading, Crypto",
  authors: [{ name: "Jupiter Route Explorer Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} h-full`}>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
