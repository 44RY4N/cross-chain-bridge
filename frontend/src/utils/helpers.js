// Format wallet address like 0x1234...abcd
export function formatAddress(address) {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

// Format token amount to fixed decimals
export function formatAmount(amount, decimals = 6) {
  if (!amount || isNaN(amount)) return "0";
  return Number(amount).toFixed(decimals);
}

// Calculate swap output based on token rates
export function calculateSwapOutput(inputAmount, fromRate, toRate) {
  if (!inputAmount || isNaN(inputAmount)) return "";
  const output = parseFloat(inputAmount) * (fromRate / toRate);
  return output.toFixed(6);
}

// Copy text to clipboard
export function copyToClipboard(text) {
  if (!text) return;
  navigator.clipboard.writeText(text);
}

// Generate random transaction hash (mock)
export function generateTxHash() {
  const chars = "abcdef0123456789";
  let hash = "0x";
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

// Delay helper (simulate blockchain tx)
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}