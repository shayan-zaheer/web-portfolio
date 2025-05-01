import { LucideIcon } from "lucide-react";

interface Links {
    github: string;
    live: string;
}

export interface Project {
    name: string;
    description: string;
    stack: string[];
    features: string[];
    links: Links;
    image: string;
    video?: string;
}

export interface Offer {
    icon: LucideIcon;
    title: string;
    description: string;
}