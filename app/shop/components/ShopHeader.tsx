"use client";
import * as React from "react";

export function ShopHeader() {
  return (
    <header className="relative flex flex-col items-center">
      <h1 className="text-border relative text-6xl font-medium text-center text-yellow-400">
        Shop
      </h1>
      <div className="flex relative gap-1 mt-3 text-2xl font-medium text-center text-white w-[93px]">
        <img
          src="/images/coin.png"
          className="object-contain shrink-0 aspect-square w-[37px]"
          alt="Currency icon"
        />
        <p className="">
          x<span className="text-[36px]">74</span>
        </p>
      </div>
    </header>
  );
}
