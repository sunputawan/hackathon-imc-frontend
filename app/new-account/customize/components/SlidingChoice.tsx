"use client"

import { useState, useEffect, act, useRef } from "react"
import { Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"


// src for event's image
const imgSrc = [
    {src: "/images/avatar/0.png"},
    {src: "/images/avatar/1.png"},
    {src: "/images/avatar/2.png"},
    {src: "/images/avatar/3.png"},
    {src: "/images/avatar/4.png"},
    {src: "/images/avatar/5.png"},
    {src: "/images/avatar/6.png"},
]

const autoPlaySwipeSpeed = 500 // in ms

type SelectedProps = {
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const SlidingChoice = ({selected, setSelected}: SelectedProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    return (
        <>  
            <div className="w-full flex flex-col items-center overflow-hidden">
                <Swiper
                    spaceBetween={15} // boxes gap
                    slidesPerView={2.8} // box per screen
                    centeredSlides={true}
                    pagination={{ clickable: true, el: ".custom-pagination" }} // Use the custom pagination
                    loop={imgSrc.length >= 4} 
                    speed={autoPlaySwipeSpeed}
                    modules={[Pagination, Autoplay]} // modules used
                    onSlideChange={(swiper) => {setActiveIndex(swiper.realIndex);}} // set the focused index to our state
                    className="w-full drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] "
                    ref={swiperRef}
                >
                    {/* Map through the image src links*/}
                    {imgSrc.map(({src}, idx) => (
                        <SwiperSlide key={idx}>
                            <div 
                                className={`flex justify-center transition-all duration-1000`}
                            >
                                <Image 
                                    src={src} 
                                    alt={`Avatar ${idx+1}`} 
                                    width={(activeIndex === idx) ? 150 : 100}
                                    height={(activeIndex === idx) ? 150 : 100}
                                    className={`text-black rounded-3xl transition-all duration-300 ${
                                        activeIndex === idx ? "opacity-100" : "opacity-50"
                                    }`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Use custom pagination, the default one stays in the box*/}
                <div className="custom-pagination mt-4 text-center"></div>
                
                
                {/* CSS for the custom-pagination */}
                <style jsx global>
                    {`
                        .custom-pagination .swiper-pagination-bullet {
                            margin: 0 4px !important; 
                            width: 9px;
                            height: 9px;
                            background-color: #FFFFFF;
                            opacity: 1;
                            transition: background-color 0.3s ease;
                        }

                        .custom-pagination .swiper-pagination-bullet-active {
                            background-color: #5D5A5A !important;
                        }
                    `}
                </style>
            </div>
        </>
    )
}

export default SlidingChoice