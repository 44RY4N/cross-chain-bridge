import { ethers } from "ethers";
import hre from "hardhat";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  const signer = await provider.getSigner();

  const artifact = await hre.artifacts.readArtifact("FakeBTC");

  const factory = new ethers.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    signer,
  );

  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("FakeBTC deployed at:", await contract.getAddress());
}

main().catch(console.error);
