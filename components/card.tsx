import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function Card({ project }) {
    return (
        <div className="bg-[#171717] text-white rounded-lg overflow-hidden shadow-lg absolute left-0 right-0 z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 top-[-10rem]">
            <img
                className="w-full h-48 object-cover"
                src="web.png"
                alt="Card image"
            />
            <div className="px-6 py-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-xl">{project.name}</h3>
                    <div className="flex gap-2">
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="rounded-full border-white/10 bg-white/5"
                        >
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="rounded-full border-white/10 bg-white/5"
                        >
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech: string, i: number) => (
                        <Badge
                            key={i}
                            variant="outline"
                            className="border-white/20 bg-white/5 text-white"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
                <p className="text-gray-300 text-base mb-4">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default Card;