"use client";

import ReactLenis from "@studio-freight/react-lenis";
import { Info, PlayIcon } from "lucide-react";

function Page() {
    return (
        <ReactLenis root>
            <div className="w-full h-0 pb-[56.25%]">
                <video
                    src="design-video.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute flex flex-col justify-center h-[80vh] z-20 px-4 md:px-12 font-poppins text-shadow-lg text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        About Me
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2">
                        Who I Am?
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm md:text-md leading-relaxed max-w-md text-justify">
                        I'm a developer driven by curiosity, creativity, and the
                        constant hunger to grow. I love turning ideas into real,
                        meaningful products — blending clean design with
                        powerful functionality. With a strong focus on
                        JavaScript, React, and Next.js, I'm always building,
                        learning, and pushing myself to be better than
                        yesterday. This is just the beginning.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <button className="flex items-center gap-2 py-2 px-4 bg-white rounded-md text-black">
                            <PlayIcon />
                            Resume
                        </button>
                        <button className="flex items-center gap-2 py-2 px-4 backdrop-blur-lg rounded-md bg-white/30 border border-white/60">
                            <Info />
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
}

export default Page;
