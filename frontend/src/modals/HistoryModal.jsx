import React from "react";
import { X, ExternalLink, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function HistoryModal({ open, close }) {

  if (!open) return null;

  const transactions = [
    {
      id: "1",
      type: "swap",
      fromToken: "ETH",
      toToken: "USDT",
      fromAmount: "0.5",
      toAmount: "925",
      status: "completed",
      timestamp: "2 min ago",
      hash: "0xabc123"
    },
    {
      id: "2",
      type: "send",
      token: "USDT",
      amount: "100",
      status: "completed",
      timestamp: "15 min ago",
      hash: "0xdef456"
    },
    {
      id: "3",
      type: "receive",
      token: "MATIC",
      amount: "200",
      status: "completed",
      timestamp: "1 hour ago",
      hash: "0xghi789"
    }
  ];

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      >

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-[#0f1524] border border-white/10 rounded-2xl w-[480px] p-6"
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-5">

            <h2 className="text-lg font-bold">
              Transaction History
            </h2>

            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400"/>
            </button>

          </div>

          {/* Transactions */}
          <div className="space-y-3 max-h-[380px] overflow-y-auto">

            {transactions.map((tx) => (

              <div
                key={tx.id}
                className="flex items-center justify-between bg-[#131929] border border-white/10 rounded-xl p-3"
              >

                <div className="flex items-center gap-3">

                  {tx.type === "send" && (
                    <ArrowUpRight className="w-5 h-5 text-red-400"/>
                  )}

                  {tx.type === "receive" && (
                    <ArrowDownLeft className="w-5 h-5 text-green-400"/>
                  )}

                  {tx.type === "swap" && (
                    <ArrowUpRight className="w-5 h-5 text-indigo-400"/>
                  )}

                  <div className="flex flex-col">

                    {tx.type === "swap" && (
                      <span className="text-sm font-semibold">
                        {tx.fromAmount} {tx.fromToken} → {tx.toAmount} {tx.toToken}
                      </span>
                    )}

                    {tx.type !== "swap" && (
                      <span className="text-sm font-semibold">
                        {tx.amount} {tx.token}
                      </span>
                    )}

                    <span className="text-xs text-gray-400">
                      {tx.timestamp}
                    </span>

                  </div>

                </div>

                <a
                  href={`https://etherscan.io/tx/${tx.hash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline flex items-center gap-1 text-xs"
                >
                  Explorer
                  <ExternalLink className="w-3 h-3"/>
                </a>

              </div>

            ))}

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default HistoryModal;