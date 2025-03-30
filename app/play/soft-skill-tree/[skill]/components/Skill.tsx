"use client"

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

type ChildrenSkillType = {
    label: string;
    image: string;
}

type SkillType = {
    label: string;
    image: string;
    child: ChildrenSkillType[];
}

const Skill = ({label, image, child}: SkillType) => {
    const router = useRouter();
    const params = useParams();
    console.log(params);
    return (
        <div className='h-screen w-full'>
            <div className='relative mt-20 mx-5'>
                <div className='relative top-16'>
                    <Image 
                        src={"/images/badge/badge-background.png"}
                        alt="badge"
                        width={130}
                        height={130}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    />
                    <Image 
                        src={image}
                        alt="skill img"
                        width={100}
                        height={100}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    />
                </div>
            </div>
            <div className='mt-60 text-center text-2xl text-border'>
                {label}
            </div>
            <div className='mt-6'>
                {child.map(({label, image}, idx) => (
                    <div 
                        key={idx}
                        onClick={() => router.push(`/play/soft-skill-tree/${params.skill}/${label.toLowerCase().split(" ").join("-")}/1`)}
                        className='relative button'
                    >
                        <Image 
                            src={"/images/skill-button.png"}
                            alt='skillimg'
                            width={320}
                            height={320}
                            className='mx-auto'    
                        />
                        <div className='text-lg flex items-center justify-start gap-4  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60%]'>
                            <Image 
                                src={image}
                                alt="skill icon"
                                width={60}
                                height={60}
                            />
                            <div className='flex-grow'>
                                {label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill