const portfolio = {
    projects: [
        {
            id: 1,
            name: "HireVision",
            description:
                "A job app with a WhatsApp chatbot that helps users find jobs and submit their CVs. It includes an admin panel for managing job listings and CVs.",
            stack: [
                "Node.js",
                "Hugging Face",
                "Google Gemini API",
                "Pinecone",
                "WA Business API",
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
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Fullstack Developer (Solo)",
                },
            ],
        },
        {
            id: 2,
            name: "Streamease",
            description:
                "A video streaming platform where users can stream and watch content, with a focus on ease of access and user experience.",
            stack: [
                "React",
                "Node.js",
                "MySQL",
                "Express",
                "Azure Blob Storage",
            ],
            features: [
                "Live streaming",
                "User authentication",
                "Content discovery",
                "Real-time chat",
            ],
            image: "/streamease.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/streamease",
                live: "https://streamease.com",
            },
            team: [
                { name: "Shayan Zaheer", role: "Backend Developer" },
                { name: "Abdul Ahad", role: "Frontend Developer" },
                { name: "Simrah Falak", role: "UI/UX Designer" },
            ],
        },
        {
            id: 3,
            name: "MrBroast-panel",
            description:
                "An admin panel for a fast food chain, managing and tracking orders, delivery riders, and waiters alongside order history.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            features: ["Data management", "Analytics dashboard"],
            image: "/mrbroast.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/mrbroast-panel",
                live: "https://mrbroast-panel.com",
            },
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Fullstack Developer (Solo)",
                },
            ],
        },
        {
            id: 4,
            name: "EZScript",
            description:
                "A web-based IDE designed specifically for JavaScript, with future expansions to other languages.",
            stack: ["React", "Node.js", "Socket.io"],
            features: [
                "Real-time collaboration",
                "Code editor",
                "Live preview",
                "Syntax highlighting",
            ],
            image: "/ezscript.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/ezscript",
                live: "https://ezscript.com",
            },
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Fullstack Developer (Solo)",
                },
            ],
        },
        {
            id: 5,
            name: "Exoplanetarium",
            description:
                "An interactive platform for learning about exoplanets, using data from space agencies and astronomical research.",
            stack: [
                "React",
                "Node.js",
                "Express",
                "React Three Fiber",
                "MongoDB",
                "Firebase",
            ],
            features: [
                "Interactive star maps",
                "Exoplanet data visualization",
                "Searchable database",
            ],
            image: "/exoplanetarium.jpg",
            links: {
                github: "https://github.com/hashirjamal/exoplanetarium",
                live: "https://exoplanetarium.com",
            },
            team: [
                { name: "Shayan Zaheer", role: "Frontend Developer" },
                { name: "Ibad Ali", role: "Frontend Developer" },
                { name: "Arham Hasan", role: "Frontend Developer" },
                { name: "Muhammad Bilal", role: "Frontend Developer" },
                { name: "Hashir Jamal", role: "Backend Developer" },
                { name: "Muneer Hussain", role: "Database Administrator" },
            ],
        },
        {
            id: 6,
            name: "GemVault",
            description:
                "A blockchain-powered marketplace for buying and selling gemstones, where transactions are verified through NFTs and smart contracts.",
            stack: [
                "Ethereum",
                "MetaMask",
                "Solidity",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Next.js",
            ],
            features: [
                "Gemstone NFTs",
                "Smart contract verification",
                "Escrow payment system",
                "Certificate verification",
            ],
            image: "/gemvault.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/gemvault",
                live: "https://gemvault.com",
            },
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Backend + Blockchain Developer",
                },
                {
                    name: "Hashir Jamal",
                    role: "Backend + Blockchain Developer",
                },
                { name: "Arham Hasan", role: "Frontend Developer" },
                { name: "Muneer Hussain", role: "Frontend Developer" },
            ],
        },
    ],
};

export { portfolio };