"use client";

import Suggestions from "@/components/suggestions";
import ReactLenis from "@studio-freight/react-lenis";
import { InfoIcon, PlayIcon } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
    SiExpress,
    SiMongodb,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiSocketdotio,
    SiHuggingface,
    SiWhatsapp,
    SiRedis,
    SiGoogle,
    SiFirebase,
    SiThreedotjs,
    SiEthereum,
    SiSolidity,
    SiPostgresql,
    SiMysql,
} from "react-icons/si";
import React, { use } from "react";
import {portfolio} from "@/lib/constants";
import Image from "next/image";

function page({ params }: { params: Promise<{ id: string }> }) {
    const id = +use(params).id;

    type Tech =
  | "react"
  | "node.js"
  | "express"
  | "socket.io"
  | "mongodb"
  | "javascript"
  | "typescript"
  | "next.js"
  | "hugging face"
  | "wa business api"
  | "redis"
  | "google gemini api"
  | "firebase"
  | "react three fiber"
  | "ethereum"
  | "solidity"
  | "postgresql"
  | "mysql"
  | "azure blob storage";

    const techIcons: Record<Tech, JSX.Element> = {
        react: <FaReact className="text-blue-400" />,
        "node.js": <FaNodeJs className="text-green-500" />,
        express: <SiExpress className="text-gray-100" />,
        "socket.io": <SiSocketdotio className="text-gray-100" />,
        mongodb: <SiMongodb className="text-green-500" />,
        javascript: <SiJavascript className="text-yellow-400" />,
        typescript: <SiTypescript className="text-blue-500" />,
        "next.js": <SiNextdotjs className="text-white" />,
        "hugging face": <SiHuggingface className="text-yellow-500" />,
        "wa business api": <SiWhatsapp className="text-green-500" />,
        redis: <SiRedis className="text-red-600" />,
        "google gemini api": <SiGoogle className="text-blue-500" />,
        firebase: <SiFirebase className="text-yellow-500" />,
        "react three fiber": <SiThreedotjs className="text-blue-500" />,
        ethereum: <SiEthereum className="text-gray-500" />,
        solidity: <SiSolidity className="text-gray-500" />,
        postgresql: <SiPostgresql className="text-blue-500" />,
        mysql: <SiMysql className="text-blue-500" />,
        "azure blob storage": <VscAzure className="text-blue-500" />,
    };

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
                        className="absolute top-0 left-0 w-full h-screen object-cover"
                    />
                    <div className="absolute inset-0 flex z-20 py-24">
                        <div className="w-full px-4 md:px-12">
                            <div className="flex flex-col items-center sm:items-start justify-center w-full h-full">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-pulp text-white mb-4 text-shadow-lg">
                                    {selectedProject?.name.toUpperCase()}
                                </h1>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 py-2 px-4 bg-white rounded-md text-black">
                                        <PlayIcon />
                                        Demo
                                    </button>
                                    <button className="flex items-center gap-2 py-2 px-4 backdrop-blur-lg rounded-md bg-white/30 border border-white/60 text-white">
                                        <InfoIcon />
                                        More Info
                                    </button>
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
                                className="bg-[#1c1c1c] rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform duration-300"
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
                                className="bg-[#1c1c1c] rounded-xl pb-4 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                <div className="w-full h-32 sm:h-50 md:h-68 mb-4 rounded-lg overflow-hidden relative">
                                    <Image
                                        src={`/${person.name.split(" ")[0].toLowerCase()}.jpeg`}
                                        alt={person.name}
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
