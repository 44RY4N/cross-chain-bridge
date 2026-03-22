import { useState } from "react";

export default function useTransactions() {

  const [transactions, setTransactions] = useState([
    {
      id: "1",
      type: "swap",
      fromToken: "ETH",
      toToken: "USDT",
      fromAmount: "0.5",
      toAmount: "925",
      chainFrom: "Ethereum",
      chainTo: "Polygon",
      status: "completed",
      timestamp: "2 min ago",
      hash: "0xabc123"
    },
    {
      id: "2",
      type: "send",
      token: "USDT",
      amount: "100",
      chain: "Ethereum",
      status: "completed",
      timestamp: "15 min ago",
      hash: "0xdef456"
    },
    {
      id: "3",
      type: "receive",
      token: "MATIC",
      amount: "200",
      chain: "Polygon",
      status: "completed",
      timestamp: "1 hour ago",
      hash: "0xghi789"
    }
  ]);

  const addTransaction = (tx) => {
    const newTx = {
      id: Date.now().toString(),
      timestamp: "just now",
      status: "pending",
      ...tx
    };

    setTransactions((prev) => [newTx, ...prev]);
  };

  const updateTransactionStatus = (id, status) => {

    setTransactions((prev) =>
      prev.map((tx) =>
        tx.id === id ? { ...tx, status } : tx
      )
    );

  };

  const clearTransactions = () => {
    setTransactions([]);
  };

  return {
    transactions,
    addTransaction,
    updateTransactionStatus,
    clearTransactions
  };
}