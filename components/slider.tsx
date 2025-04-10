"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";
import Card from "./card";

const Slider = ({ projects }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const swiperRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!projects || projects.length === 0) {
        return <div className="text-center py-10">No projects available</div>;
    }

    return (
        <div className="relative w-full max-w-full py-2 overflow-visible">
            <div className="hidden sm:block absolute top-1/2 -left-2 z-10 transform -translate-y-1/2">
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

            <div className="hidden sm:block absolute top-1/2 -right-2 z-10 transform -translate-y-1/2">
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
                    ref={swiperRef}
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={16}
                    autoplay={false}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                        enabled: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            navigation: {
                                enabled: true,
                            },
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 12,
                        },
                    }}
                    onInit={(swiper) => {
                        if (navigationPrevRef.current && navigationNextRef.current) {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                >
                    {projects.map((project, index: number) => (
                        <SwiperSlide
                            key={index}
                            className="pb-8 !overflow-y-visible"
                        >
                            <div
                                className="rounded-lg shadow-lg relative group cursor-pointer z-10"
                            >
                                <img
                                className="w-full object-cover p-4"
                                src="web.png"
                                alt="Card image"
                            />
                                <Card
                                    project={project}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Slider;
