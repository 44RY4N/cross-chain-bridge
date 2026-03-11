import { ethers } from "hardhat";

async function main() {
  const BTC = await ethers.getContractFactory("BTC");
  const BTC = await BTC.deploy();

  await BTC.waitForDeployment();

  console.log("BTC deployed to:", await BTC.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
