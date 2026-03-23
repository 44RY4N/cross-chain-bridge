import React, { useState, useEffect } from "react";
import { Wallet } from "lucide-react";
import MetaMaskModal from "../components/MetaMaskModal";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const ethereum = window.ethereum;
    if (!ethereum) return;

    const handleAccountsChanged = (accounts) => {
      setAccount(accounts.length > 0 ? accounts[0] : null);
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    ethereum.on("accountsChanged", handleAccountsChanged);
    ethereum.on("chainChanged", handleChainChanged);

    ethereum.request({ method: "eth_accounts" }).then(handleAccountsChanged);

    return () => {
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
      ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, []);

  const formatAddress = (addr) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <div className="min-h-screen text-white">
      <header className="flex justify-between p-6">
        <h1>Bridge Swap</h1>

        {account ? (
          <div>{formatAddress(account)}</div>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>
            <Wallet /> Connect Wallet
          </button>
        )}
      </header>

      <MetaMaskModal
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
        unlockWallet={setAccount}
      />
    </div>
  );
}

export default HomePage;