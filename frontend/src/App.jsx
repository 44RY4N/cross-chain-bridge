import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import SwapCard from "./components/SwapCard";

import WalletSelectionModal from "./modals/WalletSelectionModal";
import MetaMaskModal from "./modals/MetaMaskModal";
import WalletModal from "./modals/WalletModal";
import TokenModal from "./modals/TokenModal";
import ReviewModal from "./modals/ReviewModal";
import StatusModal from "./modals/StatusModal";
import SendModal from "./modals/SendModal";
import ReceiveModal from "./modals/ReceiveModal";
import BuyModal from "./modals/BuyModal";
import SettingsModal from "./modals/SettingsModal";
import PortfolioModal from "./modals/PortfolioModal";
import AddressBookModal from "./modals/AddressBookModal";
import HistoryModal from "./modals/HistoryModal";

function App() {

  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const [showWalletSelectionModal, setShowWalletSelectionModal] = useState(false);
  const [showMetaMaskModal, setShowMetaMaskModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const [showTokenModal, setShowTokenModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showAddressBookModal, setShowAddressBookModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const unlockWallet = () => {
    setIsWalletConnected(true);
    setShowMetaMaskModal(false);
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setShowWalletModal(false);
  };

  return (

    <div className="min-h-screen flex flex-col bg-[#0a0c12] text-white">

      <Navbar
        isWalletConnected={isWalletConnected}
        setShowWalletModal={setShowWalletModal}
        setShowWalletSelectionModal={setShowWalletSelectionModal}
        setShowHistoryModal={setShowHistoryModal}
        setShowSettingsModal={setShowSettingsModal}
      />

      <HeroSection />

      <main className="max-w-5xl mx-auto px-5 pb-20 w-full flex flex-col items-center gap-12">

        <SwapCard
          openToken={() => setShowTokenModal(true)}
          openReview={() => setShowReviewModal(true)}
        />

      </main>

      <WalletSelectionModal
        open={showWalletSelectionModal}
        close={() => setShowWalletSelectionModal(false)}
        openMetaMask={() => setShowMetaMaskModal(true)}
      />

      <MetaMaskModal
        open={showMetaMaskModal}
        close={() => setShowMetaMaskModal(false)}
        unlockWallet={unlockWallet}
      />

      <WalletModal
        open={showWalletModal}
        close={() => setShowWalletModal(false)}
        openPortfolio={() => setShowPortfolioModal(true)}
        openAddressBook={() => setShowAddressBookModal(true)}
        disconnectWallet={disconnectWallet}
      />

      <TokenModal
        open={showTokenModal}
        close={() => setShowTokenModal(false)}
      />

      <ReviewModal
        open={showReviewModal}
        close={() => setShowReviewModal(false)}
      />

      <StatusModal
        open={showStatusModal}
        close={() => setShowStatusModal(false)}
      />

      <SendModal
        open={showSendModal}
        close={() => setShowSendModal(false)}
      />

      <ReceiveModal
        open={showReceiveModal}
        close={() => setShowReceiveModal(false)}
        walletAddress="0xb2c8...3DB4"
      />

      <BuyModal
        open={showBuyModal}
        close={() => setShowBuyModal(false)}
      />

      <SettingsModal
        open={showSettingsModal}
        close={() => setShowSettingsModal(false)}
      />

      <PortfolioModal
        open={showPortfolioModal}
        close={() => setShowPortfolioModal(false)}
      />

      <AddressBookModal
        open={showAddressBookModal}
        close={() => setShowAddressBookModal(false)}
      />

      <HistoryModal
        open={showHistoryModal}
        close={() => setShowHistoryModal(false)}
      />

    </div>
  );
}

export default App;