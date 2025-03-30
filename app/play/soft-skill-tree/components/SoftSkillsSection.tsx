import * as React from "react";
import { SkillGroup } from "../../components/SkillGroup";

export const HardSkillsSection: React.FC = () => {
  return (
    <section className="flex relative flex-col items-start px-5 w-full">
      <div className="flex overflow-hidden relative flex-col self-center px-2.5 py-20 mt-20 max-w-full text-4xl font-medium tracking-tighter text-white">
        <img
          src="/images/soft.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
          aria-hidden="true"
        />
        <h1 className="z-10 text-border text-center">Soft Skills</h1>
      </div>

      <SkillGroup
        images={[
          "/images/badge/1.png",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/3e1544bb5890b4a72f48716c5843b2bcd5fa2c7e?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d6c774fac059bf4380bd0761a7eb9cbb22a9b2a3?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
        ]}
        className="mt-7 mx-auto"
        imageClassName="w-[70px]"
      />

      <SkillGroup
        images={[
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6f909baf33c9ece2f99943042d68701e6f78f0e?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/fb91f84ae7eb80dad5cff672b6bdfcb039e2fc05?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/bb0cae888eb45d8b4097cd787c7adb474cd6a16f?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
        ]}
        className="mt-8 mx-auto"
        imageClassName="w-[70px]"
      />
    </section>
  );
};