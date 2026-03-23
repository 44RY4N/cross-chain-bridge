import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function SendModal({
  open,
  close,
  token,
  chain
}) {

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  if (!open) return null;

  const handleSend = () => {

    if (!address || !amount) {
      alert("Enter address and amount");
      return;
    }

    alert(`Sending ${amount} ${token?.sym} to ${address}`);
    close();
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
              Send Token
            </h2>

            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400"/>
            </button>

          </div>

          {/* Token Info */}
          <div className="bg-[#131929] border border-white/10 rounded-xl p-4 mb-4">

            <div className="flex items-center gap-3">

              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: token?.bg }}
              >
                {token?.emoji}
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">
                  {token?.sym}
                </span>
                <span className="text-xs text-gray-400">
                  {chain?.name}
                </span>
              </div>

            </div>

          </div>

          {/* Address */}
          <div className="mb-4">

            <label className="text-xs text-gray-400">
              Recipient Address
            </label>

            <input
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              placeholder="0x..."
              className="w-full mt-1 p-2 bg-[#131929] border border-white/10 rounded-lg outline-none"
            />

          </div>

          {/* Amount */}
          <div className="mb-5">

            <label className="text-xs text-gray-400">
              Amount
            </label>

            <input
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="0.0"
              type="number"
              className="w-full mt-1 p-2 bg-[#131929] border border-white/10 rounded-lg outline-none"
            />

          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold"
          >

            <Send className="w-4 h-4"/>

            Send

          </button>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default SendModal;