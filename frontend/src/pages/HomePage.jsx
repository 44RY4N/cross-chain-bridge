import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const returnToLogin = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="w-full max-w-md bg-white flex-column rounded-2xl shadow-lg p-20">
        <h1 className="text-2xl font-semibold text-center">Home</h1>
        <p className="text-center">Welcome to the home page!</p>
        <button
          onClick={returnToLogin}
          className="w-full py-3 border rounded-xl hover:bg-gray-50 transition"
        >
          Return To Login Page
        </button>
      </div>
    </div>
  );
}

export default HomePage;
