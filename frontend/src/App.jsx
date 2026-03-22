import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={<HomePage account={account} setAccount={setAccount} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
