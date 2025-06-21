"use client";
// SwapPanel: Handles swap simulation and execution
import React, { useState } from "react";
import type { TokenInfo } from "./TokenSelector";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { VersionedTransaction } from "@solana/web3.js";

type SwapPanelProps = {
  inputToken: TokenInfo | null;
  outputToken: TokenInfo | null;
};

interface QuoteResponse {
  outAmount: number;
  priceImpactPct: number;
  // Add other fields from the quote response as needed
}

const SwapPanel: React.FC<SwapPanelProps> = ({ inputToken, outputToken }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState("1");
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    if (!inputToken || !outputToken) return;
    setLoading(true);
    const quoteUrl = new URL('https://quote-api.jup.ag/v6/quote');
    quoteUrl.searchParams.append('inputMint', inputToken.address);
    quoteUrl.searchParams.append('outputMint', outputToken.address);
    quoteUrl.searchParams.append('amount', (parseFloat(amount) * (10 ** inputToken.decimals)).toString());
    const quoteResponse = await (await fetch(quoteUrl.toString())).json();
    setQuote(quoteResponse);
    setLoading(false);
  };

  const handleSwap = async () => {
    if (!quote || !publicKey) return;

    try {
      // Get the swap transaction
      const swapUrl = new URL('https://quote-api.jup.ag/v6/swap');
      const swapResponse = await (
        await fetch(swapUrl.toString(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quoteResponse: quote,
            userPublicKey: publicKey.toBase58(),
          }),
        })
      ).json();

      // Sign and send the transaction
      const swapTransactionBuf = Buffer.from(swapResponse.swapTransaction, 'base64');
      const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
      const txid = await sendTransaction(transaction, connection);
      console.log(`Transaction sent: https://solscan.io/tx/${txid}`);
      alert(`Transaction sent: https://solscan.io/tx/${txid}`);
    } catch (error) {
      console.error("Error during swap:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-4 p-4 border rounded">
      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Amount to swap"
        />
        <button
          className="btn btn-secondary w-full"
          onClick={getQuote}
          disabled={!inputToken || !outputToken || loading}
        >
          {loading ? "Getting Quote..." : "Get Quote"}
        </button>
        {quote && (
          <div>
            <p>Price Impact: {quote.priceImpactPct}%</p>
            <p>
              Expected Output:{" "}
              {quote.outAmount / 10 ** (outputToken?.decimals || 0)}{" "}
              {outputToken?.symbol}
            </p>
          </div>
        )}
        {publicKey ? (
          <button
            className="btn btn-primary w-full"
            disabled={!quote}
            onClick={handleSwap}
          >
            Swap
          </button>
        ) : (
          <WalletMultiButton />
        )}
      </div>
    </div>
  );
};

export default SwapPanel;