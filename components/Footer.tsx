"use client"

import React, { useEffect, useState } from 'react'
import { useFooter } from './FooterContext';
import { usePathname, useRouter } from 'next/navigation';

const route = [
    {image: "/images/icon-home.png", path: "/home"},
    {image: "/images/icon-profile.png", path: "/profile"},
    {image: "/images/icon-play.png", path: "/play"},
    {image: "/images/icon-shop.png", path: "/shop"},
    {image: "/images/icon-gacha.png", path: "/gacha"},
]

const Footer = () => {
    const { showFooter } = useFooter();
    const [activeIdx, setActiveIdx] = useState(0);
    const [isHidden , setIsHidden] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    console.log(pathname);
    useEffect(() => {
        if(!showFooter) {
            setTimeout(() => {
                setIsHidden(true);
            }, 1000);
        }
        else {
            setIsHidden(false);
        }
    }, [showFooter])
    useEffect(() => {
        if(pathname.split("/").length > 1) {
            switch(pathname.split("/")[1]) {
                case "home":
                    setActiveIdx(0);
                    break;
                case "profile":
                    setActiveIdx(1);
                    break;
                case "play":
                    setActiveIdx(2);
                    break;
                case "shop":
                    setActiveIdx(3);
                    break;
                case "gacha":
                    setActiveIdx(4);
                    break;
                default:
                    setActiveIdx(-1);
                    break;
            }
        }
    }, [pathname])
    const handleClicked = (path: string, idx: number) => {
        router.push(path);
    }
    return (
        <footer 
            className={`fixed bottom-[5%] max-w-sm w-[90%] py-3 left-1/2 -translate-x-1/2 ${
                showFooter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } bg-cover bg-no-repeat bg-center transition-all duration-700 ease-out`}
            style={{ backgroundImage: "url('/images/footer.png')"}}
        >
            <nav className='flex justify-evenly items-center w-full px-3'>
                {route.map(({image, path}, idx) => (
                    <div
                        key={idx} 
                        onClick={() => handleClicked(path, idx)}
                        className={`w-16 h-16 
                            ${(idx === activeIdx) ? "opacity-100" : "opacity-60"} 
                            ${(isHidden) && "hidden"} 
                            transition-all duration-300 bg-cover bg-center bg-no-repeat`}
                        style={{ backgroundImage: `url('${image}')`}}
                    />
                ))}
            </nav>
        </footer>
    )
}

export default Footer