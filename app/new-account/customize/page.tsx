"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import SlidingChoice from './components/SlidingChoice';
import Image from 'next/image';
import { useFooter } from '@/components/FooterContext';
import { useEffect, useState } from 'react';


const Customize = () => {
  const [selected, setSelected] = useState(0);
  const {setShowFooter} = useFooter();
      useEffect(() => {
          setShowFooter(false);
      }, []);
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const handleSubmit = () => {
    // fetch POST the Avatar (selected)


    router.push("/new-account/path-select");
  }
  return (
    <div className='h-screen w-full'>
      <div className='mx-5'>
        <h1 className='mt-20 text-5xl'>Hi, {name}</h1>
      </div>
      <div className='h-20'/>
      <SlidingChoice 
        selected={selected}
        setSelected={setSelected}
      />
      <div 
        className='button mt-10 w-40 text-center text-4xl p-3 mx-auto bg-custom-blue rounded-full'
        onClick={() => handleSubmit()}
      >
        DONE
      </div>
    </div>
  )
}

export default Customize