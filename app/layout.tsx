import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const pulp = localFont({
    src: [
        {
            path: "./fonts/PulpDisplay-Outline.ttf",
        },
    ],
    variable: "--font-pulp",
});

export const metadata: Metadata = {
    title: "Shayan Zaheer | Full-Stack Developer & AI Engineer",
    description:
        "Portfolio of Shayan Zaheer — a full-stack web developer and AI engineer specializing in modern web apps, intelligent chatbots, and scalable backend systems. Built with Next.js, Node.js, and more.",
        icons: {
    icon: "favicon.ico",
  },
    keywords: [
        "Shayan Zaheer",
        "Full-Stack Developer",
        "Web Developer Portfolio",
        "Next.js Developer",
        "JavaScript Developer",
        "AI Engineer",
        "Chatbot Developer",
        "WhatsApp API",
        "Node.js Backend",
        "Microservices Developer",
        "Freelance Developer",
        "MERN Stack",
        "NestJS",
        "Flask",
        "Pinecone AI",
        "Gemini API",
        "React Developer",
    ],
    authors: [{ name: "Shayan Zaheer", url: "https://shayanzaheer.me/" }],
    creator: "Shayan Zaheer",
    openGraph: {
        title: "Shayan Zaheer | Full-Stack Developer & AI Engineer",
        description:
            "Explore the work and services of Shayan Zaheer — building intelligent, scalable, and modern digital solutions with JavaScript, AI, and cloud technologies.",
        url: "https://shayanzaheer.me/",
        siteName: "Shayan Zaheer Portfolio",
        images: [
            {
                url: "https://www.shayanzaheer.me/shayan.jpeg",
                width: 1200,
                height: 630,
                alt: "Shayan Zaheer Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    metadataBase: new URL("https://shayanzaheer.me"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Shayan Zaheer",
                            url: "https://shayanzaheer.me",
                            sameAs: [
                                "https://github.com/shayan-zaheer",
                                "https://linkedin.com/in/shayan-zaheer",
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${pulp.variable} ${poppins.variable}`}>
                <div className="flex flex-col min-h-screen bg-[#141414]">
                    <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />

                    <Navbar />
                    {children}

                    <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
                </div>
            </body>
        </html>
    );
}
