import React, { useState } from "react";
import { X, CreditCard, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function BuyModal({
  open,
  close
}) {

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("card");

  if (!open) return null;

  const handleBuy = () => {
    if (!amount) {
      alert("Enter amount");
      return;
    }

    alert(`Buying $${amount} using ${method}`);
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
              Buy Crypto
            </h2>

            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400"/>
            </button>

          </div>

          {/* Amount */}
          <div className="mb-4">

            <label className="text-xs text-gray-400">
              Amount (USD)
            </label>

            <input
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="100"
              type="number"
              className="w-full mt-1 p-2 bg-[#131929] border border-white/10 rounded-lg outline-none"
            />

          </div>

          {/* Payment Method */}
          <div className="space-y-3 mb-5">

            <button
              onClick={()=>setMethod("card")}
              className={`w-full flex items-center gap-3 p-3 rounded-xl border ${
                method === "card"
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-white/10 bg-[#131929]"
              }`}
            >
              <CreditCard className="w-4 h-4"/>
              Credit / Debit Card
            </button>

            <button
              onClick={()=>setMethod("bank")}
              className={`w-full flex items-center gap-3 p-3 rounded-xl border ${
                method === "bank"
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-white/10 bg-[#131929]"
              }`}
            >
              <Building2 className="w-4 h-4"/>
              Bank Transfer
            </button>

          </div>

          {/* Buy Button */}
          <button
            onClick={handleBuy}
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold"
          >
            Buy Now
          </button>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default BuyModal;