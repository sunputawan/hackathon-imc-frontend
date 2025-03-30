import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

type CareerProps = {
  label: string | undefined;
  role: string;
  lifestyle: string;
}

const Career = ({label, role, lifestyle}: CareerProps) => {
  const router = useRouter();
  return (
    <div className="relative min-h-screen w-full">
      <div 
        className='absolute top-0 h-screen w-full bg-cover bg-center bg-no-repeat -z-10'
        style={{ backgroundImage: "url('/images/bg-career.png')"}}
      />
      <Image
        src={"/images/left.png"}
        alt="back button"
        width={100}
        height={100}
        onClick={() => router.push("/profile")}
        className='button absolute top-8 -left-15'
      />
      <div className="mt-10 mx-5">
        <h1 className="text-4xl text-center">
          {label}
        </h1>

        <h1 className='mt-5 text-2xl text-border'>Role of a {label}</h1>
        <div className='text-black bg-white/60  border-4 border-black rounded-xl px-3'>{role}</div>
        <h1 className='mt-5 text-2xl text-border'>{label} Lifestyle</h1>
        <div className='text-black bg-white/60 border-4 border-black rounded-xl px-4'>{lifestyle}</div>
        <a 
          href='https://www.garenaacademy.com/learning-material/career'
          target='_blank'
          rel="noopener noreferrer"
        >
          <Image 
            src={"/images/garena-academy.png"}
            alt="garena icon"
            width={100}
            height={100}
            className='button mt-4 bg-white rounded-3xl mx-auto'
          />
          <Image 
            src={"/images/garena-learn-more.png"}
            alt="garena icon"
            width={300}
            height={300}
            className='button mt-4 bg-white rounded-3xl mx-auto'
          />
        </a>

      </div>


    </div>
  )
}

export default Career