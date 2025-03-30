"use client";
import * as React from "react";
import { HardSkillsSection } from "./components/SoftSkillsSection";
import { SkillGroup } from "../components/SkillGroup";

function SkillTree() {
  return (
    <div
      className="flex overflow-hidden relative flex-col mx-auto w-full aspect-[0.461] max-w-[480px]"
    >
      <HardSkillsSection />
    </div>
  );
}

export default SkillTree;