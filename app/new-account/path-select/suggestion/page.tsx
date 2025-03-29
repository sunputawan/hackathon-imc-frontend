"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useFooter } from '@/components/FooterContext';
import { useRouter } from 'next/navigation';

type UserDataType = {
  name: string;
}

type SuggestionType = {
  label: string;
  description: string;
}

const CompletedSelectingPath = () => {
  const router = useRouter();
  const {setShowFooter} = useFooter();
  useEffect(() => {
      setShowFooter(false);
  }, []);

  const [resultSuggestion, setResultSuggestion] = useState<string>(`
    Your creativity is budding! By pushing yourself to engage in creative exercises or projects, you'll soon unlock new innovative ideas and solutions.
  `);
  const [suggestedTopics, setSuggestedTopics] = useState<SuggestionType[]>([
    {
      label: "Critcal Thinking", 
      description: "You have a natural curiosity, and with more exposure to creative projects, you could unlock even more innovative ideas and solutions.",
    },
    {
      label: "Creativity", 
      description: "You have a natural curiosity, and with more exposure to creative projects, you could unlock even more innovative ideas and solutions.",
    },
  ]);

  useEffect(() => {
    // FETCH GET SUGGESTION TYPE ...
  }, []);

  const handleStartButtonClicked = () => {
    router.push("/new-account/path-select/whats-next");
  }
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute top-0 bg-[url("/images/forest.png")] bg-cover bg-no-repeat bg-center h-screen w-full -z-10'/>
      <div className='mt-16 mx-5 text-center'>
        <h2 className='text-3xl text-custom-yellow text-border'>
          Begin Your Next Chapter
        </h2>
        <div className='mt-3'>
          {resultSuggestion}
        </div>
        <div className='mt-10 text-left'>
          {suggestedTopics.map(({label, description}, idx) => (
            <div
              key={idx}
            >
              <h1 className='mt-5 text-2xl text-border flex items-start gap-2'>
                {label}
              </h1>
              <div className='mt-2 ml-1 bg-white text-black py-2 px-2 border-4 rounded-lg'>
                "{description}"
              </div>
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <Image 
            src={"/images/take-the-first-step.png"}
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