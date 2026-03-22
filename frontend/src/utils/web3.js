import { ethers } from "ethers";

export async function getProvider() {
  return new ethers.BrowserProvider(window.ethereum);
}
