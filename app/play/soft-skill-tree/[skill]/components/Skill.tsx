import Image from 'next/image';
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
  return (
    <div className='h-screen w-full'>
        <div className='mt-20 mx-5'>
            <div className='relative'>
                <Image 
                    src={"/images/badge/badge-background.png"}
                    alt="badge"
                    width={130}
                    height={130}
                    className='mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                />
                <Image 
                    src={image}
                    alt="skill img"
                    width={100}
                    height={100}
                    className='absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                />
            </div>
            <div>{label}</div>
        </div>
    </div>
  )
}

export default Skill