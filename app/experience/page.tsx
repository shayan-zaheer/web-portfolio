"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/loader";
import { ReactLenis } from "lenis/react";

export default function Experience() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
    <ReactLenis root>
      <div className="w-full min-h-screen overflow-visible bg-neutral-950 font-poppins text-white">
        <video
          ref={videoRef}
          src="/design-video.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="fixed top-0 left-0 w-full h-screen object-cover opacity-40"
        />

        {!isLoaded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <Loader />
          </div>
        )}

        {isLoaded && (
          <div className="relative z-10 w-full px-4 md:px-12 py-24 min-h-screen flex justify-center">
            <div className="max-w-4xl w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-16 text-shadow-lg text-center md:text-left">
                Experience
              </h1>
              
              <div className="space-y-12">
                {experienceData.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-white/20 last:border-0 pb-12 last:pb-0">
                    {/* Dot for timeline */}
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-neutral-950 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                       <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                       <span className="text-sm font-mono text-neutral-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 w-fit mt-2 md:mt-0">
                         {item.date}
                       </span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
                       <h3 className="text-xl font-semibold text-blue-400">{item.company}</h3>
                       <span className="hidden md:inline text-neutral-500">•</span>
                       <span className="text-neutral-400">{item.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.stack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/10 backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-neutral-200 leading-relaxed bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                      <ul className="list-disc space-y-3 pl-4">
                        {item.description.map((desc, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: desc }} className="pl-2" />
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </ReactLenis>
  );
}

const experienceData = [
  {
    title: "Associate Software Engineer",
    company: "IOMechs",
    date: "Oct. 2025 – Present",
    location: "Karachi, PK",
    stack: ["React Native", "Expo", "Firebase", "NestJS"],
    description: [
      "Developed <strong>NowCut</strong> (barber appointment booking app) using Expo, React Query, NativeWind, Firebase, NestJS, TypeORM, and PostgreSQL.",
      "Developed <strong>Busco</strong> (event management app) using Expo, RTK Query, Firebase, NestJS, TypeORM, and PostgreSQL.",
    ],
  },
  {
    title: "Contract Developer",
    company: "One Consultant LTD.",
    date: "Jan. 2025 – Aug. 2025",
    location: "Remote",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
    description: [
      "Engineered a subscription-based <strong>course streaming platform</strong> with secure payment integration using Stripe. Enhanced learning accessibility and supported <strong>multi-device compatibility</strong>, improving user satisfaction by 40%.",
    ],
  },
];
