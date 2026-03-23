import React from "react";
import { X, Copy, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ReceiveModal({
  open,
  close,
  walletAddress
}) {

  if (!open) return null;

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
              Receive Tokens
            </h2>

            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400" />
            </button>

          </div>

          {/* QR Placeholder */}
          <div className="flex justify-center mb-6">

            <div className="w-40 h-40 bg-[#131929] border border-white/10 rounded-xl flex items-center justify-center">

              <QrCode className="w-16 h-16 text-gray-400" />

            </div>

          </div>

          {/* Address */}
          <div className="bg-[#131929] border border-white/10 rounded-xl p-4 mb-4">

            <span className="text-xs text-gray-400">
              Your Wallet Address
            </span>

            <div className="flex items-center justify-between mt-1">

              <span className="font-mono text-sm break-all">
                {walletAddress}
              </span>

              <button
                onClick={copyAddress}
                className="p-2 bg-[#0f1524] border border-white/10 rounded-lg"
              >
                <Copy className="w-4 h-4"/>
              </button>

            </div>

          </div>

          <p className="text-xs text-gray-400 text-center">
            Send only supported tokens to this address.
          </p>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default ReceiveModal;