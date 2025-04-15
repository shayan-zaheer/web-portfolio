"use client";

import Slider from "@/components/slider";
import ReactLenis from "@studio-freight/react-lenis";
import { Info, PlayIcon } from "lucide-react";

function Page() {
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
            image: "hirevision.jpg",
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
            image: "streamease.jpg",
        },
        {
            name: "MrBroast-panel",
            description:
                "An admin panel for a fast food chain, managing and tracking orders, delivery riders, and waiters alongside order history.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            features: [
                "Data management",
                "Analytics dashboard",
            ],
            links: {
                github: "https://github.com/shayan-zaheer/mrbroast-panel",
                live: "https://mrbroast-panel.com",
            },
            image: "mrbroast.jpg",

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
            image: "ezscript.jpg",
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
            image: "exoplanetarium.jpg",
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
            image: "gemvault.jpg",
        },
    ];

    return (
        <ReactLenis root>
            <div className="w-full h-screen overflow-visible">
                <video
                    src="design-video.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 flex z-20 py-24">
                    <div className="w-full px-4 md:px-12">
                        <div className="font-poppins text-shadow-lg text-white">
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
                            <div className="mt-6 w-full">
                                <h2 className="text-xl sm:text-2xl md:text-3xl mt-2">
                                    My List
                                </h2>
                                <Slider projects={projects} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
}

export default Page;