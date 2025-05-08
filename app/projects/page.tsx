"use client";

import ReactLenis from "@studio-freight/react-lenis";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

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
            features: [
                "Data management",
                "Analytics dashboard",
            ],
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

 

function ProjectsPage() {
  return (
    <ReactLenis root>
      <div className="w-full min-h-screen overflow-visible bg-black">
        <video
          src="/design-video.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="fixed top-0 left-0 w-full h-screen object-cover opacity-20"
        />

        <div className="relative z-20 pt-24 pb-16 px-4 md:px-12">
          <div className="font-poppins text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              My Projects
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2">
              Things I've Built
            </h2>

            <div className="mt-12 space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2 relative group">
                    {project.videoPreview ? (
                      <div className="relative rounded-lg overflow-hidden border border-gray-700">
                        <video
                          src={project.videoPreview}
                          autoPlay
                          muted
                          playsInline
                          loop
                          className="w-full h-auto"
                        />
                        {/* Video player controls overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <button className="text-white hover:text-gray-300">
                                <PlayIcon />
                              </button>
                              <div className="text-sm">51:29 / 1:00:41</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="text-white hover:text-gray-300">
                                <VolumeIcon />
                              </button>
                              <button className="text-white hover:text-gray-300">
                                <SettingsIcon />
                              </button>
                              <button className="text-white hover:text-gray-300">
                                <FullscreenIcon />
                              </button>
                            </div>
                          </div>
                          {/* Progress bar */}
                          <div className="mt-2 h-1 w-full bg-gray-600 rounded-full">
                            <div className="h-full bg-red-500 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative rounded-lg overflow-hidden border border-gray-700">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={800}
                          height={450}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project details */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Features</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-white/10 transition"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

// Placeholder icons for video controls
function PlayIcon() {
  return (
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
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
}

function VolumeIcon() {
  return (
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
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    </svg>
  );
}

function SettingsIcon() {
  return (
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
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}

function FullscreenIcon() {
  return (
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
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
    </svg>
  );
}

export default ProjectsPage;