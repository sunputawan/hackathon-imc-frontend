"use client"

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Quiz = () => {
    const params = useParams();
    const router = useRouter();
    const topic = params.topic as string;
    const label = topic
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    const lessonNo = params.lessonNo;

    useEffect(() => {
        // FETCH GET LESSON QUIZ 
    }, [])
    return (
        <div className='h-screen w-full'>
            <div className='mt-12 mx-5'>
                <h1 className='text-5xl text-border text-custom-yellow text-center'>Chapter {lessonNo}</h1>
                <div
                    className='bg-white text-black p-3 border-4 rounded-xl text-xl'
                >
                    What is Public Speaking? <br />
                    Definition: Public speaking is the act of delivering a speech to a live audience. It's a key skill for personal and professional development.

                    <textarea 
                        className='mt-10 w-full h-30 bg-custom-light-gray'
                    />
                    <div 
                        onClick={() => router.push("/play/reward")}
                        className='mt-3 text-3xl border-2 text-center rounded-xl'
                    >
                        SUBMIT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz