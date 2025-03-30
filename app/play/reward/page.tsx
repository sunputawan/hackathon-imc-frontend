"use client"

import {useState, useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const QuestComplete = () => {
    const router = useRouter();
    return (
        <div className='relative min-h-screen w-full'>
                    <div className='mx-5 mt-16'>
                        <h1 className=''>
                            <div className='mt-2 mx-4 text-5xl text-custom-yellow text-border text-center'>Quest Complete</div>
                        </h1>
                        <Image 
                            src={"/images/coin.png"}
                            alt='ready button'
                            width={200}
                            height={200}
                            className='mx-auto mt-10 button'
                        />
                        <div className='mt-10 text-3xl text-border text-center'>
                            +2 coins!
                        </div>
                        <Image 
                            src={"/images/claim.png"}
                            alt='ready button'
                            width={300}
                            height={300}
                            onClick={() => router.push("/home")}
                            className='mx-auto mt-6 button'
                        />
                    </div>
                </div>
    )
}

export default QuestComplete