import React from 'react'
import ProgressBar from './ProgressBar';
import Image from 'next/image';

type PlayerStatsProps = {
  username: string;
  image: string;
  level: number;
  progress: number;
  coin: number;
  gacha: number;
}

const PlayerStats = ({username, image, level, progress, coin, gacha}: PlayerStatsProps) => {
  return (
    <div className='mb-3'>
      <div className='flex justify-start items-center gap-4'>
        <Image 
          src={image}
          alt='userimg'
          width={150}
          height={150}
          className='rounded-3xl'
        />
        <div className='flex flex-col items-start w-[80%] mr-5'>
          <h1 className='text-custom-yellow text-5xl text-border '>
            {username}
          </h1>
          <div className='text-xl text-border'>LV.{level}</div>
          <ProgressBar 
            progress={progress}
          />
        </div>
      </div>
      <div className='mt-6 mx-6 flex flex-col justify-center'>
        <div className='flex items-center gap-2'>
          <Image 
              src={"/images/coin.png"}
              alt='coin'
              width={30}
              height={30}
            />
            <div className='text-xl text-border'>x{coin}</div>
        </div>
        <div className='flex items-center gap-2'>
          <Image 
              src={"/images/gachaTicket.png"}
              alt='gacha'
              width={30}
              height={30}
            />
            <div className='text-xl text-border'>x{gacha}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerStats