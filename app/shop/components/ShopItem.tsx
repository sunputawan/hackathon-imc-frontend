import * as React from "react";

interface ShopItemProps {
  imageUrl: string;
  price: number;
  label: string;
}

export function ShopItem({ imageUrl, price, label }: ShopItemProps) {
  return (
    <article className={`flex flex-col`}>
      <img
        src={imageUrl}
        className="object-contain w-[178px]"
        alt="Shop item"
      />
      <div className="text-sm text-border">{label}</div>
      <div className="flex relative flex-col items-start mr-3.5 ml-3 aspect-[2.186]">
        <img
          src="/images/price.png"
          className="object-cover absolute inset-0 size-full"
          alt="Price background"
        />
        <div className="absolute top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 text-center flex gap-2 justify-center items-center">
            <div className="text-border">
                {price}
            </div>
            <img 
                src="/images/coin.png"
                width={25}
                height={25}
            />
        </div>
        
      </div>
    </article>
  );
}