import * as React from "react";
import { SkillGroup } from "../../components/SkillGroup";

export const HardSkillsSection: React.FC = () => {
  return (
    <section className="flex relative flex-col items-start px-5 w-full">
      <div className="flex overflow-hidden relative flex-col self-center px-2.5 py-20 mt-20 max-w-full text-4xl font-medium tracking-tighter text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f32a0c2ec03dd6e22a8bccadde7bd8b716eb4d5?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7"
          alt=""
          className="object-cover absolute inset-0 size-full"
          aria-hidden="true"
        />
        <h1 className="z-10 text-border text-center">Hard Skills</h1>
      </div>

      <SkillGroup
        images={[
          "https://cdn.builder.io/api/v1/image/assets/TEMP/571ebe9b8652f27d76feb4c5fe74c73dff69ada6?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/3e1544bb5890b4a72f48716c5843b2bcd5fa2c7e?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d6c774fac059bf4380bd0761a7eb9cbb22a9b2a3?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b79081d2c859008376f9d28813fb3c45acbbd24b?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
        ]}
        className="mt-7 ml-2.5"
        imageClassName="w-[70px]"
      />

      <SkillGroup
        images={[
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6f909baf33c9ece2f99943042d68701e6f78f0e?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/fb91f84ae7eb80dad5cff672b6bdfcb039e2fc05?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/bb0cae888eb45d8b4097cd787c7adb474cd6a16f?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
          "https://cdn.builder.io/api/v1/image/assets/TEMP/115ac2b18f69867cd1a600ebfd2f2301caffbe27?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7",
        ]}
        className="mt-8 ml-2.5"
        imageClassName="w-[70px]"
      />

      <div className="flex gap-3.5 self-center mt-8 max-w-full w-[158px]">
        <div className="flex relative flex-1 gap-2.5 items-start self-start px-0.5 py-1.5 mt-2 min-h-[70px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8552d197424473b0705880ec9dd61590173bbdba?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7"
            alt="Skill icon"
            className="object-contain absolute right-0 bottom-0 z-0 shrink-0 items-start self-start aspect-square h-[70px] min-h-[70px] w-[70px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f30b81e8108878bfab38a3b62bc0443b8cab489d?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7"
            alt="Skill icon"
            className="object-contain z-0 shrink-0 my-auto aspect-square w-[59px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ad1685f0f543c6a74b18eb0502e03683227ca3?placeholderIfAbsent=true&apiKey=922d528bf6934ebdad1cf713faed1db7"
          alt="Skill icon"
          className="object-contain shrink-0 aspect-[0.99] w-[75px]"
        />
      </div>
    </section>
  );
};