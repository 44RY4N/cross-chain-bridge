import React from "react";
import { Settings, Activity } from "lucide-react";

function Navbar({
  isWalletConnected,
  setShowWalletModal,
  setShowWalletSelectionModal,
  setShowHistoryModal,
  setShowSettingsModal
}) {

  const handleConnect = () => {
    setShowWalletSelectionModal(true);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 h-[52px] bg-[#0a0c12]/95 border-b border-white/5 backdrop-blur-xl">

      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">
          ⇅
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-white">
            Bridge Swap
          </span>
          <span className="text-[10px] text-[#6b7a99]">
            Cross-Chain Bridge
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5">

        {isWalletConnected ? (
          <div
            onClick={() => setShowWalletModal(true)}
            className="flex items-center gap-2 bg-[#131929] border border-white/10 rounded-full p-1 pr-3.5 cursor-pointer hover:border-white/20 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />

            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold font-mono">
                0xb2c8...3DB4
              </span>

              <span className="text-[10px] text-[#6b7a99]">
                14.47 POL
              </span>
            </div>
          </div>
        ) : (
          <button
            onClick={handleConnect}
            className="bg-[#131929] border border-white/10 text-white text-xs font-semibold py-2 px-4 rounded-xl hover:bg-[#1e2840] transition-all"
          >
            Connect Wallet
          </button>
        )}

        {/* History */}
        <div
          onClick={() => setShowHistoryModal(true)}
          className="w-9 h-9 rounded-full bg-[#131929] border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#1e2840] transition-all"
          title="Transaction History"
        >
          <Activity className="w-4 h-4 text-[#e8eaf0]" />
        </div>

        {/* Settings */}
        <div
          onClick={() => setShowSettingsModal(true)}
          className="w-9 h-9 rounded-full bg-[#131929] border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#1e2840] transition-all"
        >
          <Settings className="w-4 h-4 text-[#e8eaf0]" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;