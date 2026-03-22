import React from "react";
import { ArrowDownUp } from "lucide-react";

function FlipButton({ flipTokens }) {

  return (
    <div className="flex justify-center">
      <button
        onClick={flipTokens}
        className="w-9 h-9 bg-[#131929] border-2 border-white/10 rounded-lg flex items-center justify-center text-[#6b7a99] hover:bg-indigo-600 hover:text-white transition-all"
      >
        <ArrowDownUp className="w-4 h-4" />
      </button>
    </div>
  );
}

export default FlipButton;