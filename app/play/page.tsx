"use client";
import { useRouter } from "next/navigation";
import * as React from "react";

function SkillLanding() {
  const router = useRouter();
  return (
    <main className="mt-10 mx-auto w-full">
      <section className="flex relative flex-col items-center w-full text-5xl text-white">
        <div 
          className="flex flex-col justify-center items-center button custom-shadow"
          onClick={() => router.push("/play/hard-skill-tree")}
        >
            <img
                src="/images/hard.png"
                width={200}
                height={200}
                className="object-contain mt-5"
            />
            <h2 className="z-10 text-5xl font-medium tracking-tighter text-white text-border button">
                {"Hard Skills"}
            </h2>
        </div>
        <div 
          className="flex flex-col justify-center items-center button"
          onClick={() => router.push("/play/soft-skill-tree")}
        >
            <img
                src="images/soft.png"
                width={250}
                height={250}
                className="object-contain mt-5"
            />
            <h2 className="z-10 text-5xl font-medium tracking-tighter text-white text-border button">
                {"Soft Skills"}
            </h2>
        </div>
      </section>


    </main>
  );
}

export default SkillLanding;