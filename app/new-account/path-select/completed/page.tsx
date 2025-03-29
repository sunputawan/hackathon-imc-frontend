"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ImageRepeater from './components/ImageRepeater';
import { useFooter } from '@/components/FooterContext';
import { useRouter } from 'next/navigation';

type UserDataType = {
  name: string;
}

type SkillResultedType = {
  label: string;
  description: string;
  score: number;
}

const CompletedSelectingPath = () => {
  const router = useRouter();
  const {setShowFooter} = useFooter();
  useEffect(() => {
      setShowFooter(false);
  }, []);
  const [userData, setUserData] = useState<UserDataType>({
    name: "Thanabordee"
  });
  const [skillsResulted, setSkillsResulted] = useState<SkillResultedType[]>([
    {
      label: "Communication Skills", 
      description: "You’re highly confident in expressing your thoughts clearly, making you a great communicator. This skill is essential in leadership, teamwork, and customer-facing roles.",
      score: 3
    },
    {
      label: "Time Management", 
      description: "You effectively prioritize and plan tasks, helping you meet deadlines consistently. This will be invaluable in managing projects or balancing multiple responsibilities.",
      score: 1
    },
  ]);

  useEffect(() => {
    // FETCH GET SKILL RESULTED TYPE ...
  }, []);

  const handleStartButtonClicked = () => {
    router.push("/new-account/path-select/suggestion");
  }
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute top-0 bg-[url("/images/forest.png")] bg-cover bg-no-repeat bg-center h-screen w-full -z-10'/>
      <div className='mt-16 mx-5 text-center'>
        <h2 className='text-2xl mx-5 text-border'>
          Hey {userData.name}, <br /> Based on your responses, here's a breakdown of your soft skills and interests!
        </h2>
        <div className='mt-10 text-left'>
          {skillsResulted.map(({label, description}, idx) => (
            <div
              key={idx}
            >
              <h1 className='mt-5 text-2xl text-border flex items-start gap-2'>
                {label}
                <ImageRepeater 
                    repeat={skillsResulted[idx].score}
                    size={23}
                />
              </h1>
              <div className='mt-2 ml-1 bg-white text-black py-2 px-2 border-4 rounded-lg'>
                "{description}"
              </div>
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <Image 
            src={"/images/start-learning-button.png"}
            alt="start button"
            width={300}
            height={300}
            onClick={handleStartButtonClicked}
            className='button mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default CompletedSelectingPath