import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div className="flex items-center py-4 px-4 md:px-12 text-white font-poppins justify-between text-shadow-lg z-60 sm:text-sm">
            <div className="flex items-center gap-12">
                <Link href="/">
                    <Image
                        src="/main-logo.png"
                        alt="Shayan Logo"
                        width={192}
                        height={48}
                        className="hover:scale-105 duration-300 transition-all"
                        priority
                    />
                </Link>
                <ul className="hidden sm:flex gap-8">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
            <Image
                src="/yellow.jpg"
                alt="Profile Icon"
                width={32}
                height={32}
                className="object-cover rounded-full"
            />
        </div>
    );
}

export default Navbar;
