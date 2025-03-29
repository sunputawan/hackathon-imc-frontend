"use client"

import { useState, useEffect } from 'react'
import Machine from './components/Machine'
import { useFooter} from '@/components/FooterContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Gacha = () => {
    const ticketCount = 5;

    const router = useRouter();
    const [isSpinning, setIsSpining] = useState<boolean>(false);
    const [sizeMultiplier, setSizeMultiplier] = useState<number>(1);
    const {setShowFooter} = useFooter();
    const handleSpin = () => {
        setIsSpining(true);
        setShowFooter(false);
        setTimeout(() => {
            router.push('/gacha/new-wearable');
        }, 2500)
        setTimeout(() => {
            setIsSpining(false);
            setShowFooter(true);
            setSizeMultiplier(1);
        }
        , 3000);
    }

    useEffect(() => {
        if (isSpinning) {
            let increment = 0.015;
            let maxSize = 3;
            const interval = setInterval(() => {
                setSizeMultiplier((prev) => {
                    const newSize = prev + increment;
                    return newSize >= maxSize ? maxSize : newSize;
                });
            }, 100); // Increase every 100ms

            setTimeout(() => {
                clearInterval(interval);
            }, 3000); // Stop increasing after 3s

            return () => clearInterval(interval); // Cleanup
        }
    }, [isSpinning]);

    return (
        <>
            <div className={`absolute top-0 w-full h-screen bg-black -z-10 transition-all ease-out`}
                style={{
                    opacity: 1.2*(sizeMultiplier - 1),
                }}
            />
            <div className='absolute top-0 bg-[url("/images/forest.png")] bg-cover bg-no-repeat bg-center h-screen w-full -z-20'/>
            <div className={`flex justify-end items-center gap-5 mx-4 ${
                isSpinning ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
            } transition-all duration-1000 ease-out`}>
                <Image 
                    src={`/images/gachaTicket.png`}
                    alt="ticket"
                    width={80}
                    height={80}
                    className=''
                />
                <div className='text-5xl'>x{ticketCount}</div>
            </div>
            <div className={`text-center ${
                isSpinning ? 'translate-y-20' : 'translate-y-0'
            } transition-all duration-[3s] ease-out
            }`}>
                <Machine 
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpining}
                    sizeMultiplier={sizeMultiplier}
                />
                <div className={`my-4 text-4xl mx-5 ${
                    isSpinning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
                } transition-all duration-1000 ease-out
                }`}>
                    spin to get your wearables
                </div>
                <button 
                    className={`w-[60%] bg-custom-blue text-white text-5xl rounded-full py-4 
                        ${isSpinning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}
                        transition-all duration-1000 ease-out`}
                        onClick={handleSpin}
                        >
                    spin !
                </button>
            </div>     
        </>
    )
}

export default Gacha