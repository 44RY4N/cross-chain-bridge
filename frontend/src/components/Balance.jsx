import { useState } from "react";
import { ethers } from "ethers";
import { contractAddress, abi } from "../utils/contract.js";

function Balance({ account }) {
  const [balance, setBalance] = useState("");

  async function getBalance() {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const bal = await contract.balanceOf(account);

    setBalance(bal.toString());
  }

  return (
    <div>
      <button onClick={getBalance}>Get BTC Balance</button>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default Balance;
