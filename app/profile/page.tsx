"use client"

import {useEffect, useState} from 'react'
import Image from 'next/image'
import ProgressBar from '@/components/ProgressBar';
import { useRouter } from 'next/navigation';
import { useFooter } from '@/components/FooterContext';

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
    progress: number;
    image: string;
    skills: SkillType[];
}

const Profile = () => {
    const router = useRouter();
    const {setShowFooter} = useFooter();
          useEffect(() => {
              setShowFooter(true);
      }, []);
    const [userData, setUserData] = useState<UserDateType>({
        name: "JIRAYU",
        progress: 82,
        image: "/images/avatar/1.png",
        skills: [
            {
                label: "Game Designer", 
                progress: 45.4, 
                badges: [
                    {image: "/images/badge/3.png", name: "", label: ""},
                    {image: "/images/badge/4.png", name: "", label: ""},
                    {image: "/images/badge/5.png", name: "", label: ""},
                ]
            },
            {
                label: "Game Artist", 
                progress: 76.547, 
                badges: [
                    {image: "/images/badge/1.png", name: "", label: ""},
                    {image: "/images/badge/2.png", name: "", label: ""},
                    {image: "/images/badge/3.png", name: "", label: ""},
                    {image: "/images/badge/4.png", name: "", label: ""},
                ]
            },
            {
                label: "Game Animator", 
                progress: 27.335, 
                badges: [
                    {image: "/images/badge/3.png", name: "", label: ""},
                    {image: "/images/badge/4.png", name: "", label: ""},
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
                    className='rounded-full object-cover'
                />
                <div className='flex flex-col flex-grow mr-12 '>
                    <div className=''>
                        <div className='text-4xl'>
                            {userData.name}
                        </div>
                        <div className='text-xl'>
                            
                        </div>
                    </div>
                    <ProgressBar 
                        progress={userData.progress}
                    />
                </div>
            </section>

            <div className='h-5'></div>
            <section className='mx-10'>
                {userData.skills
                    .sort((a, b) => b.progress - a.progress)
                    .map(({ label, progress, badges }, idx) => (
                        <div 
                            key={idx}
                            className='my-5 mt-10'
                        >
                            <div className='flex gap-3'>
                                {badges.map(({image, name, label}, idx) => (
                                    <div
                                        key={idx}
                                        className='relative'
                                    >
                                        <div 
                                            className='absolute -z-10 top-1/2 w-16 h-16 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover bg-no-repeat bg-center'
                                            style={{ backgroundImage: "url('images/badge/badge-background.png')"}}
                                        />
                                        <Image 
                                            src={image}
                                            alt="badge img"
                                            width={64}
                                            height={64}
                                            className='rounded-full'
                                        />  
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-start items-center gap-2 my-2 text-xl text-border'>
                                {label}
                                <Image 
                                    src={"/images/help-icon.png"}
                                    alt='help'
                                    width={100}
                                    height={100}
                                    className='button'
                                    onClick={() => router.push(`/career/${label.split(" ").join("-").toLowerCase()}`)}
                                />
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