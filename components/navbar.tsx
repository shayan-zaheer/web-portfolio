import Link from "next/link";

function Navbar() {
    return (
        <div className="flex items-center px-4 py-2 gap-8 text-white font-poppins relative text-shadow-lg">
            <Link href="/" className="z-20">
                <img
                    src="main-logo.png"
                    alt="Shayan"
                    className="w-64 h-16 hover:scale-105 duration-300 transition-all"
                />
            </Link>
            <ul className="hidden sm:flex gap-8 z-20">
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Resume</li>
            </ul>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
        </div>
    );
}

export default Navbar;
