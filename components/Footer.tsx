"use client"

import React, { useState } from 'react'
import { useFooter } from './FooterContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const route = [
    {image: "/images/icon-home.png", path: "/home"},
    {image: "/images/icon-profile.png", path: "/profile"},
    {image: "/images/icon-quiz.png", path: "/quiz"},
    {image: "/", path: "/gacha"},
    {image: "/images/icon-shop.png", path: "/shop"},
]

const Footer = () => {
    const { showFooter } = useFooter();
    const [activeIdx, setActiveIdx] = useState(0);
    const router = useRouter();
    const handleClicked = (path: string, idx: number) => {
        router.push(path);
        setActiveIdx(idx);
    }
    return (
        <footer 
            className={`fixed bottom-[5%] max-w-sm w-[90%] py-3 left-1/2 -translate-x-1/2 ${
                showFooter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } bg-cover bg-no-repeat bg-center transition-all duration-700 ease-out`}
            style={{ backgroundImage: "url('images/footer.png')"}}
        >
            <nav className='flex justify-evenly w-full px-3'>
                {route.map(({image, path}, idx) => (
                    <Image
                        key={idx} 
                        src={image}
                        alt="icon"
                        width={56}
                        height={56}
                        onClick={() => handleClicked(path, idx)}
                        className={`rounded-full p-7  ${
                            (idx === activeIdx) ? "opacity-100" : "opacity-80"
                        } transition-all duration-300`}
                    />
                ))}
            </nav>
        </footer>
    )
}

export default Footer