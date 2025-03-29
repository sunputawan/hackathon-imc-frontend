"use client"

import { useFooter } from '@/components/FooterContext';
import InputBox from '@/components/InputBox';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const NewAccountPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const {setShowFooter} = useFooter();
    useEffect(() => {
        setShowFooter(false);
    }, []);
    
    const handleSubmit = () => {
        router.push(`/new-account/customize?name=${username}`);
    }
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <InputBox 
                username={username}
                setUsername={setUsername}
                handleSubmit={handleSubmit}
            />
        </div>
      )
}

export default NewAccountPage;