"use client"

import { usePathname } from "next/navigation"
import Career from "./components/Career";
import { useEffect, useState } from "react";
import { useFooter } from "@/components/FooterContext";

type CareerProps = {
  label: string | undefined;
  role: string;
  lifestyle: string;
}

const CareerPage = () => {
  const {setShowFooter} = useFooter();
      useEffect(() => {
          setShowFooter(false);
  }, []);
  const pathname = usePathname();
  const label = pathname.split("/").at(-1)?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const [careerData, setCareerData] = useState<CareerProps>({
    label: label,
    role: "A Game Designer creates and shapes the gameplay experience by designing mechanics, levels, characters, and storylines. They work with developers and artists to bring concepts to life. Essential skills include creativity, collaboration, problem-solving, communication, and knowledge of game design principles.",
    lifestyle: "A Game Designer’s lifestyle is dynamic, with long hours during deadlines, but offers creative freedom and teamwork. They collaborate with developers, artists, and writers, balancing creativity, technical skills, problem-solving and time management. The role can be rewarding but often comes with pressure and tight deadlines.",
  })
  useEffect(() => {
    // FETCH GET CAREER DETAILS ...
  }, [])
  return (
    <Career
      label={careerData.label}
      role={careerData.role}
      lifestyle={careerData.lifestyle}
    />
  )
}

export default CareerPage