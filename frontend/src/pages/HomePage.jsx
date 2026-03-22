import Wallet from "../components/Wallet";
import Balance from "../components/Balance";
import Transfer from "../components/Transfer";

function HomePage({ account, setAccount }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <Wallet setAccount={setAccount} />

      <p>Connected Account: {account}</p>

      <Balance account={account} />

      <Transfer />
    </div>
  );
}

export default HomePage;
