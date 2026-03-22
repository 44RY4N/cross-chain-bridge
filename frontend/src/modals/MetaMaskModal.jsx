import React, { useState } from "react";
import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function MetaMaskModal({ open, close, unlockWallet }) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleConnect = async () => {
    setLoading(true);

    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts && accounts.length > 0) {
          unlockWallet(accounts[0]);
          close();
        }
      } else {
        alert("MetaMask not detected");
      }
    } catch (err) {
      console.error("Connection error:", err);
    }

    setLoading(false);
  };

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
          className="bg-[#0f1524] border border-white/10 rounded-2xl w-[420px] p-6 text-center"
        >
          <div className="flex justify-end">
            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="mb-4">
            <div className="w-16 h-16 mx-auto rounded-xl bg-orange-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
              M
            </div>

            <h2 className="text-lg font-bold">Connect MetaMask</h2>

            <p className="text-xs text-gray-400 mt-1">
              Connect your wallet to start swapping tokens
            </p>
          </div>

          <button
            onClick={handleConnect}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            {loading ? "Connecting..." : "Unlock Wallet"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MetaMaskModal;