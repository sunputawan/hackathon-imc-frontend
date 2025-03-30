"use client"

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Skill from './components/Skill';

type ChildrenSkillType = {
    label: string;
    image: string;
}

type SkillType = {
    label: string;
    image: string;
    child: ChildrenSkillType[];
}

const SkillPage = () => {
    const pathname = usePathname();
    const label = pathname.split("/").at(-1)?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") ?? "SKILL";
    const [skillDetail, setSkillDetail] = useState<SkillType>({
        label: label,
        image: "/images/badge/1.png",
        child: [
            {label: "Identifying Solution", image: "/images/bade/2.png"},
            {label: "Logical Thinking", image: "/images/bade/3.png"},
            {label: "Resourcefulness", image: "/images/bade/4.png"},
            {label: "Critical Action", image: "/images/bade/5.png"},
        ]
    });
    useEffect(() => {
        //FETCH GET SKILL DETAIL

    }, [])
    return (
        <Skill 
            label={skillDetail.label}
            image={skillDetail.image}
            child={skillDetail.child}
        />
      )
}

export default SkillPage