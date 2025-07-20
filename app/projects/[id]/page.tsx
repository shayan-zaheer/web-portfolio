"use client";

import Suggestions from "@/components/suggestions";
import { ReactLenis } from "lenis/react";
import { PlayIcon } from "lucide-react";
import React, { use } from "react";
import { portfolio } from "@/lib/constants";
import Image from "next/image";
import techIcons from "@/lib/project-props";

function page({ params }: { params: Promise<{ id: string }> }) {
    const id = +use(params).id;

    const selectedProject = portfolio.projects.find(
        (project) => project.id === id
    );

    return (
        <ReactLenis root>
            <div className="w-full h-screen overflow-visible">
                <div>
                    <Image
                        src={selectedProject!.image}
                        alt=""
                        fill
                        className="absolute top-0 left-0 w-full h-screen object-cover"
                    />
                    <div className="absolute inset-0 flex z-20 py-24">
                        <div className="w-full px-4 md:px-12">
                            <div className="flex flex-col items-center sm:items-start justify-center w-full h-full">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold mb-4 text-shadow-lg text-white">
                                    {selectedProject?.name.toUpperCase()}
                                </h1>
                                <div className="flex gap-2">
                                    {selectedProject?.links.live != "Under development" ? (
                                        <a
                                            href={selectedProject?.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 py-2 px-4 bg-white rounded-md text-black"
                                        >
                                            <PlayIcon />
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="text-white">
                                            Live Demo: Under development
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#141414] w-full min-h-screen flex flex-col font-poppins">
                <div className="px-4 md:px-12">
                    <p className="text-gray-300 text-sm md:text-base max-w-3xl mb-10">
                        {selectedProject?.description}
                    </p>

                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Cast
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {selectedProject?.stack.map((technology, index) => (
                            <div
                                key={index}
                                className="bg-[#1c1c1c] rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            >
                                <div className="flex gap-2 mb-2 text-xl">
                                    {techIcons[technology.toLowerCase()] || (
                                        <span className="text-gray-400">
                                            {technology}
                                        </span>
                                    )}
                                </div>
                                <p className="text-white text-sm font-medium">
                                    {technology}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-semibold text-white my-6">
                        Crew
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {selectedProject?.team.map((person, index) => (
                            <div
                                key={index}
                                className="bg-[#1c1c1c] rounded-xl pb-4 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            >
                                <div className="w-full h-32 sm:h-50 md:h-68 mb-2 rounded-t-lg overflow-hidden relative">
                                    <Image
                                        src={`/${person.name
                                            .split(" ")[0]
                                            .toLowerCase()}.jpeg`}
                                        alt={person.name}
                                        fill
                                        className="w-full h-full object-cover object-center"
                                        priority
                                    />
                                </div>

                                <div className="w-full">
                                    <p className="text-white text-sm font-medium">
                                        {person.name}
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-semibold text-white my-6">
                        Suggestions
                    </h2>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 pb-26">
                        {portfolio.projects.map((project, index) => (
                            <Suggestions
                                key={index}
                                number={index + 1}
                                image={project.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
}

export default page;
