import React from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ReviewModal({
  open,
  close,
  sellToken,
  buyToken,
  sellAmount,
  buyAmount,
  sellChain,
  buyChain,
  confirmSwap
}) {

  if (!open) return null;

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
              Review Swap
            </h2>

            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400"/>
            </button>

          </div>

          {/* Swap Summary */}
          <div className="bg-[#131929] border border-white/10 rounded-xl p-4 mb-4">

            <div className="flex items-center justify-between">

              <div className="flex flex-col">
                <span className="text-xs text-gray-400">You Pay</span>
                <span className="font-semibold">
                  {sellAmount} {sellToken?.sym}
                </span>
                <span className="text-[11px] text-gray-500">
                  {sellChain?.name}
                </span>
              </div>

              <ArrowRight className="text-gray-400"/>

              <div className="flex flex-col text-right">
                <span className="text-xs text-gray-400">You Receive</span>
                <span className="font-semibold">
                  {buyAmount} {buyToken?.sym}
                </span>
                <span className="text-[11px] text-gray-500">
                  {buyChain?.name}
                </span>
              </div>

            </div>

          </div>

          {/* Fee + Route */}
          <div className="text-xs text-gray-400 space-y-1 mb-5">

            <div className="flex justify-between">
              <span>Route</span>
              <span>{sellChain?.short} → {buyChain?.short}</span>
            </div>

            <div className="flex justify-between">
              <span>Bridge</span>
              <span className="text-indigo-400">Axelar</span>
            </div>

            <div className="flex justify-between">
              <span>Estimated Time</span>
              <span>~30 seconds</span>
            </div>

          </div>

          {/* Confirm */}
          <button
            onClick={confirmSwap}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold"
          >
            Confirm Swap
          </button>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default ReviewModal;