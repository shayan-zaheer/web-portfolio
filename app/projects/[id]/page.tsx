"use client";

import Suggestions from "@/components/suggestions";
import { ReactLenis } from "lenis/react";
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
    SiStripe,
    SiRabbitmq
} from "react-icons/si";
import React, { JSX, use } from "react";
import { portfolio } from "@/lib/constants";
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
        | "azure blob storage"
        | "metamask"
        | "pinecone"
        | "stripe"
        | "rabbitmq";

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
        stripe: <SiStripe className="text-blue-500" />,
        metamask: (
            <svg
                viewBox="0 0 512 492"
                fill="none"
                className="w-5 h-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth=".25"
                >
                    <path
                        d="M478.468 474.862L368.183 442.171L285.013 491.664L226.987 491.64L143.769 442.171L33.5324 474.862L0 362.174L33.5324 237.106L0 131.365L33.5324 0.312256L205.786 102.76H306.214L478.468 0.312256L512 131.365L478.468 237.106L512 362.174L478.468 474.862Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M33.5563 0.312256L205.809 102.832L198.959 173.19L33.5563 0.312256Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M143.793 362.222L219.583 419.696L143.793 442.171V362.222Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M213.525 267.201L198.959 173.238L105.717 237.13L105.669 237.106V237.154L105.957 302.921L143.768 267.201H143.793H213.525Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M478.467 0.312256L306.214 102.832L313.041 173.19L478.467 0.312256Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M368.231 362.222L292.441 419.696L368.231 442.171V362.222Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M406.331 237.154H406.355H406.331V237.106L406.307 237.13L313.065 173.238L298.498 267.201H368.231L406.066 302.921L406.331 237.154Z"
                        fill="#FF5C16"
                        stroke="#FF5C16"
                    ></path>
                    <path
                        d="M143.769 442.171L33.5324 474.862L0 362.222H143.769V442.171Z"
                        fill="#E34807"
                        stroke="#E34807"
                    ></path>
                    <path
                        d="M213.502 267.177L234.559 403.013L205.377 327.487L105.91 302.921L143.745 267.177H213.478H213.502Z"
                        fill="#E34807"
                        stroke="#E34807"
                    ></path>
                    <path
                        d="M368.231 442.171L478.467 474.862L512 362.222H368.231V442.171Z"
                        fill="#E34807"
                        stroke="#E34807"
                    ></path>
                    <path
                        d="M298.498 267.177L277.441 403.013L306.623 327.487L406.09 302.921L368.231 267.177H298.498Z"
                        fill="#E34807"
                        stroke="#E34807"
                    ></path>
                    <path
                        d="M0 362.173L33.5324 237.106H105.645L105.909 302.896L205.377 327.463L234.558 402.989L219.559 419.623L143.769 362.149H0V362.173Z"
                        fill="#FF8D5D"
                        stroke="#FF8D5D"
                    ></path>
                    <path
                        d="M512 362.173L478.467 237.106H406.355L406.09 302.896L306.623 327.463L277.441 402.989L292.441 419.623L368.231 362.149H512V362.173Z"
                        fill="#FF8D5D"
                        stroke="#FF8D5D"
                    ></path>
                    <path
                        d="M306.214 102.76H256H205.786L198.959 173.118L234.558 402.918H277.441L313.065 173.118L306.214 102.76Z"
                        fill="#FF8D5D"
                        stroke="#FF8D5D"
                    ></path>
                    <path
                        d="M33.5324 0.312256L0 131.365L33.5324 237.106H105.645L198.935 173.19L33.5324 0.312256Z"
                        fill="#661800"
                        stroke="#661800"
                    ></path>
                    <path
                        d="M192.661 294.46H159.994L142.206 311.815L205.401 327.415L192.661 294.436V294.46Z"
                        fill="#661800"
                        stroke="#661800"
                    ></path>
                    <path
                        d="M478.468 0.312256L512 131.365L478.468 237.106H406.355L313.065 173.19L478.468 0.312256Z"
                        fill="#661800"
                        stroke="#661800"
                    ></path>
                    <path
                        d="M319.387 294.46H352.102L369.89 311.839L306.623 327.463L319.387 294.436V294.46Z"
                        fill="#661800"
                        stroke="#661800"
                    ></path>
                    <path
                        d="M284.989 446.834L292.441 419.671L277.442 403.037H234.535L219.535 419.671L226.987 446.834"
                        fill="#661800"
                        stroke="#661800"
                    ></path>
                    <path
                        d="M284.989 446.833V491.687H226.987V446.833H284.989Z"
                        fill="#C0C4CD"
                        stroke="#C0C4CD"
                    ></path>
                    <path
                        d="M143.793 442.123L227.035 491.664V446.81L219.583 419.648L143.793 442.123Z"
                        fill="#E7EBF6"
                        stroke="#E7EBF6"
                    ></path>
                    <path
                        d="M368.231 442.123L284.989 491.664V446.81L292.441 419.648L368.231 442.123Z"
                        fill="#E7EBF6"
                        stroke="#E7EBF6"
                    ></path>
                </g>
            </svg>
        ),
        pinecone: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="w-5 h-5"
                viewBox="0 0 256 288"
            >
                <path
                    fill="#FFFFFF"
                    d="M108.634 254.436c9.08 0 16.44 7.361 16.44 16.442s-7.36 16.44-16.44 16.44s-16.442-7.36-16.442-16.44s7.361-16.442 16.442-16.442m91.216-29.998l16.247 4.814L203.2 272.78a8.47 8.47 0 0 1-8.7 6.046l-3.983-.273l-.098.08l-41.39-2.904l1.152-16.906l27.808 1.887l-18.205-26.262l13.926-9.656l18.229 26.295zm-176.837-30.09l16.903 1.197l-1.98 27.804L64.15 205.12l9.677 13.91l-26.248 18.248l26.792 7.895l-4.79 16.255l-43.732-12.885a8.47 8.47 0 0 1-6.058-8.726zM132.15 170.67l30.508 36.832l-13.75 11.389l-18.156-21.92l-5.886 33.702l-17.587-3.074l5.892-33.755l-24.442 14.412l-9.063-15.383l41.079-24.2a8.93 8.93 0 0 1 11.405 1.997m85.354-24.71l15.239-8.292l22.2 40.805a8.675 8.675 0 0 1-1.926 10.69l-3.141 2.714l-32.05 27.893l-11.386-13.09l21.548-18.747l-32.095-5.781l3.078-17.074l32.073 5.779zM37.782 103.298l11.48 13.008l-21.251 18.743l32.156 5.614l-2.98 17.091l-32.192-5.618l13.827 24.998l-15.18 8.398l-22.558-40.776a8.675 8.675 0 0 1 1.85-10.703zm108.694-13.42l30.404 36.734l-13.753 11.384l-18.152-21.93l-5.886 33.712l-17.587-3.074l5.872-33.624l-24.349 14.274l-9.027-15.403l37.4-21.929l.038-.142l.165.021l3.485-2.032a8.93 8.93 0 0 1 11.39 2.01m39.18-18.065l6.65-16.024l43.012 17.85a8.675 8.675 0 0 1 5.218 9.517l-.716 3.982l-7.345 41.78l-17.086-3.01l4.924-27.968l-28.537 15.772l-8.386-15.188l28.591-15.784zm-81.939-31.577l.74 17.334l-28.414 1.214l21.43 24.49l-13.056 11.424L62.95 70.173l-5.001 28l-17.078-3.054l8.184-45.759a8.674 8.674 0 0 1 8.17-7.139l4.02-.18l.09-.065zm58.121-36.965l30.267 36.965l-13.814 11.31l-17.964-21.943l-6.059 33.668l-17.57-3.162l6.068-33.743l-24.526 14.34l-9.007-15.415L150.428 1.22a8.93 8.93 0 0 1 11.41 2.052"
                ></path>
            </svg>
        ),
        rabbitmq: <SiRabbitmq className="text-red-500" />,
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
                        fill
                        className="absolute top-0 left-0 w-full h-screen object-cover"
                    />
                    <div className="absolute inset-0 flex z-20 py-24">
                        <div className="w-full px-4 md:px-12">
                            <div className="flex flex-col items-center sm:items-start justify-center w-full h-full">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-pulp mb-4 text-shadow-lg bg-gradient-to-r from-[#00E8FC] via-[#D400A5] to-[#6A00F4] animate-gradient bg-clip-text text-transparent text-center ">
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
