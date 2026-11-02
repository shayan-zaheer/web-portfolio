const portfolio = {
    projects: [
        {
            id: 1,
            name: "Phonolytics",
            description:
                "An AI-driven conversation intelligence platform that analyzes communication in real time to fairly evaluate agent performance by separating effort from client conviction, providing sentiment analysis, automated call scoring, and live coaching insights to improve communication quality, motivation, and operational efficiency across sales, support, BPOs, and other service-driven industries.",
            stack: [
                "React",
                "FastAPI",
                "Gladia",
                "Qwen3",
                "Redis",
                "PostgreSQL",
            ],
            features: [
                "Real-time transcription",
                "AI-powered analysis",
                "Sales simulator",
            ],
            image: "/phonolytics.png",
            links: {
                github: "https://github.com/shayan-zaheer/Phonolytics-DesktopApp",
                live: "https://phonolytics.com/",
            },
            team: [
                { name: "Shayan Zaheer", role: "Backend Developer" },
                { name: "Muneer Hussain", role: "Frontend Developer" },
                { name: "Hashir Jamal", role: "Backend Developer" },
                { name: "Muhammad Bilal", role: "AI Developer" },
            ],
        },
        {
            id: 2,
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
                "RabbitMQ",
            ],
            features: [
                "Gemstone NFTs",
                "Smart contract verification",
                "Escrow payment system",
                "Certificate verification",
            ],
            image: "/gemvault.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/GemstoneMarketplace",
                live: "https://gemstone-marketplace-three.vercel.app/",
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
        {
            id: 3,
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
                "Pinecone",
            ],
            features: [
                "Interactive star maps",
                "Exoplanet data visualization",
                "Searchable database",
            ],
            image: "/exoplanetarium.jpg",
            links: {
                github: "https://github.com/hashirjamal/Exoplanetarium",
                live: "https://exo-planetarium.vercel.app/",
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
    ],
};

export { portfolio };
