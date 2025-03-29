"use client"

import {useEffect, useState} from 'react'
import Image from 'next/image'
import ProgressBar from '@/components/ProgressBar';

type BadgeType = {
    image: string;
    name: string;
    label: string;
}

type SkillType = {
    badges: BadgeType[];
    label: string;
    progress: number;
}

type UserDateType = {
    name: string;
    class: string;
    image: string;
    skills: SkillType[];
}

const Profile = () => {
    const [userData, setUserData] = useState<UserDateType>({
        name: "JIRAYU",
        class: "Designer Meets",
        image: "/",
        skills: [
            {
                label: "UX/UI Designer", 
                progress: 45.4, 
                badges: [
                    {image: "/", name: "", label: ""},
                    {image: "/", name: "", label: ""},
                    {image: "/", name: "", label: ""},
                    {image: "/", name: "", label: ""},
                ]
            },
            {
                label: "Front-End Developer", 
                progress: 76.547, 
                badges: [
                    {image: "/", name: "", label: ""},
                    {image: "/", name: "", label: ""},
                ]
            },
            {
                label: "Game Caster", 
                progress: 27.335, 
                badges: [
                    {image: "/", name: "", label: ""},
                    {image: "/", name: "", label: ""},
                    {image: "/", name: "", label: ""},
                ]
            },
        ],
    });

    useEffect(() => {
        // fetch User Data ...
    }, [])
    return (
        <div className='h-screen w-full'>
            <div className='h-10'/>
            <section className='ml-10 flex items-center justify-center gap-5'>
                <Image 
                    src={userData.image}
                    alt="userImage"
                    width={100}
                    height={100}
                    className='bg-white rounded-full object-cover'
                />
                <div className='flex-grow'>
                    <div className='text-4xl'>
                        {userData.name}
                    </div>
                    <div className='text-xl'>
                        
                    </div>
                </div>
            </section>

            <div className='h-5'></div>
            <section className='mx-10'>
                {userData.skills
                    .sort((a, b) => b.progress - a.progress)
                    .map(({ label, progress, badges }, idx) => (
                        <div 
                            key={idx}
                            className='my-5'
                        >
                            <div className='flex gap-3'>
                                {badges.map(({image, name, label}, idx) => (
                                    <Image 
                                        key={idx}
                                        src={image}
                                        alt="badge img"
                                        width={64}
                                        height={64}
                                        className='bg-white rounded-full'
                                    />
                                ))}
                            </div>
                            <div className='mt-1 text-xl'>
                                {label}
                            </div>
                            <ProgressBar 
                                progress={progress}
                            />
                        </div>
                    )
                )}
            </section>
        </div>
    )
}

export default Profile