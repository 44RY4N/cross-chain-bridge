import React from "react";
import { motion } from "framer-motion";

function Hero() {

  const stats = [
    { label: "Total Volume", value: "$2.4B+", icon: "📊", change: "+12.5%" },
    { label: "Supported Chains", value: "15+", icon: "🔗", change: "Networks" },
    { label: "Transactions", value: "1.2M+", icon: "⚡", change: "+8.3%" },
    { label: "Active Users", value: "45K+", icon: "👥", change: "+15.2%" },
  ];

  return (
    <section className="relative pt-28 pb-20 px-5 text-center bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.15)_0%,transparent_65%)]">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] mb-7 tracking-tighter"
      >
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Cross-Chain Bridge
        </span>
        <br />
        <span className="text-white">Made Simple</span>
      </motion.h1>

      <p className="text-lg text-[#8896b0] max-w-2xl mx-auto mb-9 leading-relaxed">
        Swap and bridge tokens across multiple blockchain networks with the best
        rates, lightning-fast speeds, and military-grade security.
      </p>

      {/* Status badges */}
      <div className="flex flex-wrap justify-center gap-3.5 mb-20">
        <div className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-[#b0b8cc] bg-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          Live on 15+ Networks
        </div>

        <div className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-[#b0b8cc] bg-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          Audited & Secure
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">

        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-[#0f1524] border border-white/5 rounded-2xl p-6 text-left transition-colors hover:border-white/15"
          >

            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#1a2235] flex items-center justify-center text-xl">
                {stat.icon}
              </div>

              <span className={`text-xs font-bold ${
                stat.change.includes("+") ? "text-green-500" : "text-indigo-500"
              }`}>
                {stat.change}
              </span>
            </div>

            <div className="text-3xl font-extrabold text-white mb-1">
              {stat.value}
            </div>

            <div className="text-xs text-[#6b7a99] font-medium">
              {stat.label}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Hero;