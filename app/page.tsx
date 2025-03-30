"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const login = false;
  
  useEffect(() => {
    if(!login) {
      router.push('/new-account');
    } else {
      router.push("/home");
    }
  })
  

  return (
    <div className="text-center h-screen w-full flex flex-col justify-center items-center">
    </div>
  );
}
