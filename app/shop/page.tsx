"use client";

import * as React from "react";
import { ShopHeader } from "./components/ShopHeader";
import { ShopItem } from "./components/ShopItem";

export default function Shop() {
  return (
    <main className="flex overflow-hidden relative flex-col items-center pt-12 pb-5 mx-auto w-full aspect-[0.461] max-w-[480px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e60aabd895ad12c2e0fd9271fab564926d1d90?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7"
        className="object-cover absolute inset-0 size-full"
        alt="Shop background"
      />
      <ShopHeader />
      <section className="flex relative flex-col items-center self-stretch px-5 mt-5 w-full text-2xl font-medium text-center text-white">
        <div className="flex gap-1 self-stretch">
          <ShopItem
            imageUrl="/images/skooldio.png"
            price={800}
            label="Skooldio Course Voucher"
          />
          <ShopItem
            imageUrl="/images/coursera.png"
            price={800}
            label="Coursera Course Voucher"
          />
        </div>
        <ShopItem
          imageUrl="/images/linkedin.png"
          price={600}
          label="Linkedin Course Voucher"
        />
      </section>
    </main>
  );
}