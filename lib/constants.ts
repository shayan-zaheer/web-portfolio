const portfolio = {
    projects: [
        {
            id: 1,
            name: "Phonolytics",
            description: "An AI-driven conversation intelligence platform that analyzes communication in real time to fairly evaluate agent performance by separating effort from client conviction, providing sentiment analysis, automated call scoring, and live coaching insights to improve communication quality, motivation, and operational efficiency across sales, support, BPOs, and other service-driven industries.",
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
                "Sales simulator"
            ],
            image: "/phonolytics.png",
            links: {
                github: "https://github.com/shayan-zaheer/Phonolytics-DesktopApp",
                live: "https://phonolytics.com/",
            },
            team: [
                { name: "Shayan Zaheer", role: "Backend Developer" },
                { name: "Muneer Hussain", role: "Frontend Developer" },
                { name: "Hashir Jamal", role: "Backend Developer"},
                { name: "Muhammad Bilal", role: "AI Developer" },
            ],
        },
        {
            id: 2,
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
                "RabbitMQ"
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
                live: "Under development",
            },
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Fullstack Developer (Solo)",
                },
            ],
        },
        {
            id: 3,
            name: "Streamease",
            description:
                "A video streaming platform where users can stream and watch content, with a focus on ease of access and user experience.",
            stack: [
                "React",
                ".NET",
                "SQL Server",
                "AWS S3",
            ],
            features: [
                "Live streaming",
                "User authentication",
                "Content discovery",
                "HLS Support",
            ],
            image: "/streamease.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/streamease",
                live: "https://streamease-lemon.vercel.app/",
            },
            team: [
                { name: "Shayan Zaheer", role: "Backend Developer" },
                { name: "Abdul Ahad", role: "Frontend Developer" },
                { name: "Simrah Falak", role: "UI/UX Designer" },
            ],
        },
        {
            id: 4,
            name: "TableOps",
            description:
                "An admin panel for a fast food chain, managing and tracking orders, delivery riders, and waiters alongside order history.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            features: ["Data management", "Analytics dashboard"],
            image: "/tableops.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/TableOps",
                live: "Under development",
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
                live: "https://ezscript.vercel.app/",
            },
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Fullstack Developer (Solo)",
                },
            ],
        },
        {
            id: 6,
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
        {
            id: 7,
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
        // {
        //     id: 7,
        //     name: "Professional Courses - USA",
        //     description:
        //         "A course watching platform that allows users to watch and learn from various courses, with a focus on user experience and accessibility.",
        //     stack: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe"],
        //     features: [
        //         "Course management",
        //         "User authentication",
        //         "Payment integration",
        //         "Responsive design",
        //     ],
        //     image: "/pc-usa.jpg",
        //     links: {
        //         github: "https://github.com/shayan-zaheer/pc-usa",
        //         live: "Under development",
        //     },
        //     team: [
        //         {
        //             name: "Shayan Zaheer",
        //             role: "Backend Developer",
        //         },
        //         {
        //             name: "Rahim Gangji",
        //             role: "Frontend Developer",
        //         },
        //     ],
        // },
        {
            id: 8,
            name: "OpenAPI",
            description:
                "A modern API sharing platform where developers can upload and explore APIs written in Python, JavaScript, and Java — with options for public, private, free, and paid APIs, all organized for easy access and controlled visibility.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            features: [
                "API upload and management",
                "Public/private visibility controls",
                "Free and paid API categorization",
                "Blurred previews for paid APIs",
                "Responsive and developer-friendly UI",
            ],
            image: "/openapi.jpg",
            links: {
                github: "https://github.com/shayan-zaheer/OpenAPI",
                live: "https://open-api-iota-eosin.vercel.app/",
            },
            team: [
                {
                    name: "Shayan Zaheer",
                    role: "Backend Developer",
                },
                {
                    name: "Ayan Tahir",
                    role: "Backend Developer",
                },
                {
                    name: "Arham Hasan",
                    role: "Frontend Developer",
                },
            ],
        },

    ],
};

export { portfolio };
