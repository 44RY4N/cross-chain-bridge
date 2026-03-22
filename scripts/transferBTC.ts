import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  const signer = await provider.getSigner(0);
  const receiver = await provider.getSigner(1);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const abi = [
    "function balanceOf(address) view returns (uint256)",
    "function transfer(address,uint256)",
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const balanceBefore = await contract.balanceOf(await signer.getAddress());
  console.log("Sender balance before:", balanceBefore.toString());

  await contract.transfer(await receiver.getAddress(), 20);

  const balanceAfter = await contract.balanceOf(await signer.getAddress());
  console.log("Sender balance after:", balanceAfter.toString());
}

main();
