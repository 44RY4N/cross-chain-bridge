import React from "react";
import { ethers } from "ethers";

function MetaMaskModal({ open, close, unlockWallet }) {
  if (!open) return null;

  const handleConnect = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not installed");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      unlockWallet(accounts[0]); 
      close();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-[#0f172a] p-6 rounded-2xl text-white w-[400px]">

        <h2 className="text-xl mb-4">Connect MetaMask</h2>

        <button
          onClick={handleConnect}
          className="w-full bg-purple-600 py-3 rounded-xl"
        >
          Unlock Wallet
        </button>

        <button onClick={close} className="mt-3 text-sm text-gray-400">
          Cancel
        </button>

      </div>
    </div>
  );
}

export default MetaMaskModal;