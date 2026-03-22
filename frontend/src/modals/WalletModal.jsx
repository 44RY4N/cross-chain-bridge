import React from "react";
import { X, Copy, LogOut, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WalletModal({
  open,
  close,
  openPortfolio,
  openAddressBook,
  disconnectWallet
}) {
  if (!open) return null;

  const walletAddress = "0xb2c8...3DB4";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
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
          className="bg-[#0f1524] border border-white/10 rounded-2xl w-[420px] p-6"
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold">
              Wallet
            </h2>

            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Address */}
          <div className="bg-[#131929] border border-white/10 rounded-xl p-4 mb-4">

            <div className="flex justify-between items-center">

              <div className="flex flex-col">
                <span className="text-xs text-gray-400">
                  Connected Address
                </span>

                <span className="font-mono text-sm">
                  {walletAddress}
                </span>
              </div>

              <button
                onClick={copyAddress}
                className="p-2 bg-[#0f1524] border border-white/10 rounded-lg"
              >
                <Copy className="w-4 h-4" />
              </button>

            </div>

          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 mb-4">

            <button
              onClick={openPortfolio}
              className="flex items-center gap-2 justify-center bg-[#131929] border border-white/10 rounded-xl p-3 hover:border-indigo-500 transition-all"
            >
              <ArrowUpRight className="w-4 h-4" />
              Portfolio
            </button>

            <button
              onClick={openAddressBook}
              className="flex items-center gap-2 justify-center bg-[#131929] border border-white/10 rounded-xl p-3 hover:border-indigo-500 transition-all"
            >
              <ArrowDownLeft className="w-4 h-4" />
              Address Book
            </button>

          </div>

          {/* Disconnect */}
          <button
            onClick={disconnectWallet}
            className="w-full flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl py-3 hover:bg-red-500/20 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Disconnect Wallet
          </button>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default WalletModal;