"use client";
import Loader from '@/components/loader';
import React from 'react'

function Resume() {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
            const video = videoRef.current;
            if (!video) return;
    
            const handleCanPlay = () => {
                setIsLoaded(true);
            };
    
            if (video.readyState >= video.HAVE_FUTURE_DATA) {
                setIsLoaded(true);
            } else {
                video.addEventListener("canplay", handleCanPlay);
            }
    
            return () => {
                video.removeEventListener("canplay", handleCanPlay);
            };
        }, []);

  return (
     <div className="w-full h-[80vh] overflow-visible bg-black flex justify-center items-center" >
                <video
                    ref={videoRef}
                    preload="auto"
                    src="/design-video.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="fixed top-0 left-0 w-full h-screen object-cover opacity-70"
                />

                {!isLoaded && (
                    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
                        <Loader />
                    </div>
                )}

                <div className="relative z-30 flex flex-col items-center justify-center w-full h-full px-4 md:px-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold mb-4 text-shadow-lg text-white">
                        Resume
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base max-w-3xl mb-10">
                        Download my resume to learn more about my skills and experiences.
                    </p>
                    <a
                        href="/resume.pdf"
                        title="Resume"
                        className="py-2 px-4 bg-white rounded-md text-black hover:bg-gray-200 transition-colors duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
  )
}

export default Resume