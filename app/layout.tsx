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
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
