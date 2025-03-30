"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const alreadyHaveAccount = false;
  useEffect(() => {
    if(alreadyHaveAccount) {
      router.push("/home");
    } else {
      router.push("/new-account");
    }
  })
  return (
    <div className="text-center h-screen w-full flex flex-col justify-center items-center">

    </div>
  );
}
