import Smiley from "@/components/smiley";
import Link from "next/link";

function page() {
    const smileys = [
        { section: "About", color: "yellow", href: "/about" },
        { section: "Experience", color: "grey", href: "/experience" },
        { section: "Projects", color: "blue", href: "/projects" },
        { section: "Resume", color: "red", href: "/resume" },
    ];

    return (
        <div className="flex flex-col items-center justify-center flex-grow text-shadow-lg">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Who's watching?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2">
                {smileys.map((smiley, index) => (
                    <Link href={smiley.href} key={index}>
                        <Smiley color={smiley.color} section={smiley.section} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default page;
