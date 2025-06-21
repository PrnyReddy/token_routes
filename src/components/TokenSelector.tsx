// TokenSelector: Autocomplete input for SPL tokens using Jupiter Token API
import React, { useEffect, useState } from "react";

export type TokenInfo = {
  address: string;
  symbol: string;
  name: string;
  logoURI: string;
  decimals: number;
};

type TokenSelectorProps = {
  label: string;
  onSelect: (token: TokenInfo) => void;
};

const TokenSelector: React.FC<TokenSelectorProps> = ({ label, onSelect }) => {
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<TokenInfo[]>([]);

  useEffect(() => {
    fetch("https://token.jup.ag/all")
      .then((res) => res.json())
      .then((data) => setTokens(data));
  }, []);

  useEffect(() => {
    setFiltered(
      tokens.filter(
        (t) =>
          t.symbol.toLowerCase().includes(query.toLowerCase()) ||
          t.address.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, tokens]);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        type="text"
        placeholder="Search token by symbol or mint address"
        className="input input-bordered w-full mb-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="bg-white dark:bg-gray-800 border rounded max-h-48 overflow-y-auto">
        {filtered.slice(0, 10).map((token) => (
          <li
            key={token.address}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setQuery(token.symbol);
              onSelect(token);
            }}
          >
            <img src={token.logoURI} alt={token.symbol} className="w-5 h-5 rounded-full" />
            <span className="font-semibold">{token.symbol}</span>
            <span className="text-xs text-gray-400">{token.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenSelector;