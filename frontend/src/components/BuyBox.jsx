import React from "react";
import { ChevronDown } from "lucide-react";

function BuyBox({
  buyAmount,
  buyToken,
  buyChain,
  openTokenModal
}) {

  return (

    <div className="bg-[#131929] border border-white/5 rounded-xl p-3.5">

      <span className="text-[10px] font-bold text-[#6b7a99] uppercase">
        BUY
      </span>

      <div className="flex items-center gap-2.5 mt-2">

        <button
          onClick={openTokenModal}
          className="flex items-center gap-2"
        >

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
            style={{ background: buyToken?.bg }}
          >
            {buyToken?.emoji}
          </div>

          <div className="flex flex-col text-left">

            <span className="text-sm font-bold">
              {buyToken?.sym}
            </span>

            <span className="text-[10px] text-[#6b7a99]">
              {buyChain?.short}
            </span>

          </div>

          <ChevronDown className="w-3 h-3 text-[#6b7a99]" />

        </button>

      </div>

      <input
        type="text"
        readOnly
        value={buyAmount}
        placeholder="0.0"
        className="flex-1 bg-transparent border-none outline-none text-2xl font-bold text-white mt-2 w-full"
      />

    </div>

  );
}

export default BuyBox;