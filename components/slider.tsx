"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";
import { Offer } from "@/lib/interfaces";

const Slider = ({ offers }: { offers: Offer[] }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!offers || offers.length === 0) {
        return <div className="text-center py-10">No offers available</div>;
    }

    return (
        <div className="relative w-full max-w-full py-2 overflow-visible">
            <div className="hidden sm:block absolute top-1/2 -left-9 z-10 transform -translate-y-1/2">
                <button
                    ref={navigationPrevRef}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Previous slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            </div>

            <div className="hidden sm:block absolute top-1/2 -right-9 z-10 transform -translate-y-1/2">
                <button
                    ref={navigationNextRef}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {isMounted && (
                <Swiper
                    className="!overflow-y-visible !overflow-x-clip"
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    grabCursor={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        960: {
                            slidesPerView: 3, 
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 22,
                        }
                    }}
                    onBeforeInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    {offers.map((offer, index) => (
                        <SwiperSlide
                        key={index}
                        className="h-full pb-8"
                    >
                        <div className="bg-zinc-900 w-full h-40 sm:h-48 md:h-56 rounded-lg border border-zinc-700 flex flex-col items-center justify-center px-3 hover:scale-[1.01] transition ease-in-out duration-300">
                            <offer.icon className="text-4xl sm:text-5xl text-indigo-600" />
                            <h2 className="text-lg sm:text-xl font-bold text-center text-white mt-2 sm:mt-3">
                                {offer.title}
                            </h2>
                            <p className="text-zinc-300 text-xs sm:text-sm text-center px-2 sm:px-4 mt-1 sm:mt-2">
                                {offer.description}
                            </p>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Slider;