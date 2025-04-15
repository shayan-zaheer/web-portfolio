import Link from "next/link";

function Navbar() {
    return (
        <div className="flex items-center py-4 px-4 md:px-12 text-white font-poppins justify-between text-shadow-lg z-60 sm:text-sm">
            <div className="flex items-center gap-12">
                <Link href="/">
                    <img
                        src="main-logo.png"
                        alt="Shayan"
                        className="w-48 h-12 hover:scale-105 duration-300 transition-all"
                    />
                </Link>
                <ul className="hidden sm:flex gap-8">
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Resume</li>
                </ul>
            </div>
            <img
                src="yellow.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
            />
        </div>
    );
}

export default Navbar;
