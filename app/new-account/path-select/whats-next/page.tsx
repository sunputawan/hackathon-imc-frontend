"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useFooter } from '@/components/FooterContext';
import { useRouter } from 'next/navigation';

type UserDataType = {
    name: string;
}

type CourseSuggestedType = {
    label: string;
    description: string;
    purpose: string
}

const CompletedSelectingPath = () => {
    const router = useRouter();
    const {setShowFooter} = useFooter();
    useEffect(() => {
        setShowFooter(false);
    }, []);

    const [resultSuggestion, setResultSuggestion] = useState<string>(`
        Based on your strengths and growth areas, here’s your personalized learning path to help you grow your communication, creativity, and critical thinking skills.  `);
    const [suggestedTopics, setSuggestedTopics] = useState<CourseSuggestedType[]>([
        {
        label: "Public Speaking Mastery", 
        description: "Learn how to express yourself with confidence in any situation.",
        purpose: "Take Your Communication Skills to the Next Level"
        },
        {
        label: "Design Thinking", 
        description: "Develop innovative solutions and gain the creative thinking tools needed in today’s competitive world.",
        purpose: "Boost Your Creativity & Problem-Solving Skills"
        },
    ]);

    useEffect(() => {
        // FETCH GET SUGGESTION TYPE ...
    }, []);

    const handleStartButtonClicked = () => {
        router.push("/home");
    }
    return (
        <div className='relative h-screen w-full'>
            <div className='absolute top-0 bg-[url("/images/forest.png")] bg-cover bg-no-repeat bg-center h-screen w-full -z-10'/>
                <div className='mt-16 mx-5 text-center'>
                    <h2 className='text-3xl text-custom-yellow text-border flex items-start justify-center gap-2'>
                        What's Next For You?
                    <Image 
                        src={"/images/rocket.png"}
                        alt="rocket"
                        width={32}
                        height={32}
                    />
                    </h2>
                        <div className='mt-3'>
                            {resultSuggestion}
                        </div>
                    <div className='mt-10 text-left'>
                        {suggestedTopics.map(({label, description, purpose}, idx) => (
                            <div
                                key={idx}
                                className='mt-7'
                            >
                                <div className='text-center text-border text-xl'>{purpose} !</div>
                                <h1 className='mt-2 text-md text-black bg-custom-light-gray rounded-lg text-center'>
                                    Course Suggestion: " {label} "
                                </h1>
                                <div className='ml-1 bg-white text-black py-2 px-2 border-4 rounded-lg'>
                                    "{description}"
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-10'>
                    <Image 
                        src={"/images/finish-get-start.png"}
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