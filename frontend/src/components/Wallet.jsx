import { useState } from "react";
import { getProvider } from "../utils/web3";

function Wallet({ setAccount }) {
  const [account, setLocalAccount] = useState("");

  async function connectWallet() {
    const provider = await getProvider();

    const accounts = await provider.send("eth_requestAccounts", []);

    setLocalAccount(accounts[0]);
    setAccount(accounts[0]);
  }

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>{account}</p>
    </div>
  );
}

export default Wallet;
