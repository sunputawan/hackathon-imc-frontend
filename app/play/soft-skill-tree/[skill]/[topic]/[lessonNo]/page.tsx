"use client"

import { useFooter } from '@/components/FooterContext';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

type LessonType = {
    image: string;
    label: string;
    topic: string;
    description: string;
}

const Lesson = () => {
    const router = useRouter();
    const {setShowFooter} = useFooter();
    useEffect(() => {
              setShowFooter(false);
    }, []);
    const params = useParams();
    const topic = params.topic as string;
    const label = topic
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    const lessonNo = params.lessonNo;
    const [data, setData] = useState<LessonType>({
        image: "/images/badge/1.png",
        label: topic,
        topic: "Structuring problems and solutions using logic and reason",
        description: "This lesson focuses on developing problem-solving skills by teaching students how to structure problems and solutions using logic and reasoning. Through engaging gameplay and a small quiz, learners will practice breaking down complex issues into manageable parts and apply logical thinking to identify effective solutions. By the end of this lesson, students will be able to approach problems systematically, enhancing their ability to solve challenges in various contexts."
    });
    return (
        <div className='relative min-h-screen w-full'>
            <div 
                className='absolute h-screen w-full -z-10 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: "url('/images/bg-career.png')"}}
            />
            <div className='mx-5 mt-16'>
                <h1 className=''>
                    <Image 
                        src={data.image}
                        alt="skillImage"
                        width={100}
                        height={100}
                        className='mx-auto'
                    />
                    <div className='mt-2 text-3xl text-border text-center'>{label}</div>
                </h1>
                <div className='mt-10 text-2xl text-border'>{lessonNo}) {data.topic}</div>
                <div className='mt-5 bg-white text-black p-3 border-4 rounded-xl'>{data.description}</div>
                <Image 
                    src={"/images/ready.png"}
                    alt='ready button'
                    width={200}
                    height={200}
                    onClick={() => router.push(`/play/soft-skill-tree/${params.skill}/${params.topic}/${params.lessonNo}/quiz`)}
                    className='mx-auto mt-5 button'
                />
            </div>
        </div>
    )
}

export default Lesson