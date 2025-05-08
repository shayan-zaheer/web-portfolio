"use client";

import Suggestions from "@/components/suggestions";
import ReactLenis from "@studio-freight/react-lenis";
import { InfoIcon, Code,
    Server,
    Database,
    Palette,
    KeyRound, PlayIcon } from "lucide-react";
import React, { use } from "react";

function page({ params }: { params: Promise<{ id: string }> }) {
    const id = +use(params).id;

    const projects = [
        {
            name: "HireVision",
            description:
                "A job app with a WhatsApp chatbot that helps users find jobs and submit their CVs. It includes an admin panel for managing job listings and CVs.",
            stack: [
                "Node.js",
                "Hugging Face",
                "Google Gemini API",
                "Pinecone",
                "Twilio",
                "Redis",
                "Next.js",
            ],
            features: [
                "WhatsApp chatbot",
                "Dynamic job listings",
                "CV submission",
                "Admin panel",
                "Microservices architecture",
            ],
            image: "/hirevision.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/hirevision",
                live: "https://hirevision.com",
            },
        },
        {
            name: "Streamease",
            description:
                "A video streaming platform where users can stream and watch content, with a focus on ease of access and user experience.",
            stack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            features: [
                "Live streaming",
                "User authentication",
                "Content discovery",
                "Real-time chat",
            ],
            links: {
                github: "https://github.com/shayan-zaheer/streamease",
                live: "https://streamease.com",
            },
            image: "/streamease.jpg",
        },
        {
            name: "MrBroast-panel",
            description:
                "An admin panel for a fast food chain, managing and tracking orders, delivery riders, and waiters alongside order history.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            features: ["Data management", "Analytics dashboard"],
            links: {
                github: "https://github.com/shayan-zaheer/mrbroast-panel",
                live: "https://mrbroast-panel.com",
            },
            image: "/mrbroast.jpg",
        },
        {
            name: "EZScript",
            description:
                "A web-based IDE designed specifically for JavaScript, with future expansions to other languages.",
            stack: ["React", "Node.js", "WebSockets"],
            features: [
                "Real-time collaboration",
                "Code editor",
                "Live preview",
                "Syntax highlighting",
            ],
            links: {
                github: "https://github.com/shayan-zaheer/ezscript",
                live: "https://ezscript.com",
            },
            image: "/ezscript.jpg",
        },
        {
            name: "Exoplanetarium",
            description:
                "An interactive platform for learning about exoplanets, using data from space agencies and astronomical research.",
            stack: ["React", "D3.js", "Node.js"],
            features: [
                "Interactive star maps",
                "Exoplanet data visualization",
                "Searchable database",
            ],
            links: {
                github: "https://github.com/hashirjamal/exoplanetarium",
                live: "https://exoplanetarium.com",
            },
            image: "/exoplanetarium.jpg",
        },
        {
            name: "GemVault",
            description:
                "A blockchain-powered marketplace for buying and selling gemstones, where transactions are verified through NFTs and smart contracts.",
            stack: [
                "Ethereum",
                "MetaMask",
                "Smart Contracts",
                "Node.js",
                "MongoDB",
            ],
            features: [
                "Gemstone NFTs",
                "Smart contract verification",
                "Escrow payment system",
                "Certificate verification",
            ],
            links: {
                github: "https://github.com/shayan-zaheer/gemvault",
                live: "https://gemvault.com",
            },
            image: "/gemvault.jpg",
        },
    ];

    const cast = [
        { name: "Next.js", role: "Frontend", icon: Code },
        { name: "Node.js", role: "Backend", icon: Server },
        { name: "MongoDB", role: "Database", icon: Database },
        { name: "Tailwind", role: "Styling", icon: Palette },
        { name: "OAuth", role: "Authentication", icon: KeyRound },
      ];
      

    const selectedProject = projects[id];

    return (
        <ReactLenis root>
            <div className="w-full h-screen overflow-visible">
                <div>
                    <img
                        src={selectedProject.image}
                        alt=""
                        className="absolute top-0 left-0 w-full h-screen object-cover"
                    />
                    <div className="absolute inset-0 flex z-20 py-24">
                        <div className="w-full px-4 md:px-12">
                            <div className="flex flex-col items-start justify-center w-full h-full">
                                <h1 className="text-4xl md:text-6xl font-pulp text-white mb-4 italic">
                                    {selectedProject.name.toUpperCase()}
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
                            <div className="flex flex-wrap justify-center gap-x-2 gap-y-12">
                                {projects.map((project, index) => (
                                    <Suggestions
                                        key={index}
                                        number={index + 1}
                                        image={project.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#141414] w-full h-screen flex items-center justify-center">
                <div className="mt-10 px-4 md:px-12">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Cast
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {cast.map((member, index) => (
                            <div
                                key={index}
                                className="bg-[#1c1c1c] rounded-xl p-4 flex flex-col items-center text-center shadow-md"
                            >
                                  <member.icon className="h-10 w-10 text-white mb-3" />
                                <p className="text-white text-sm font-medium">
                                    {member.name}
                                </p>
                                <p className="text-gray-400 text-xs">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
}

export default page;
