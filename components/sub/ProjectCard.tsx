import Image from "next/image";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface Props {
    src?: string;
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    tags?: string[];
    featured?: boolean;
}

const ProjectCard = ({ src, title, description, githubLink, liveLink, tags, featured }: Props) => {
    return (
        <div className={`relative overflow-hidden rounded-lg shadow-lg border-2 ${featured ? 'border-purple-500 lg:col-span-2' : 'border-[#2A0E61]'} transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 group`}>
            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                </div>
            )}

            {/* Image Container */}
            {src && (
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900 to-black">
                    <Image
                        src={src}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
            )}

            {/* Content */}
            <div className="p-6 bg-gradient-to-b from-[#0300145e] to-[#03001417]">
                <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
                
                <p className="mt-2 text-gray-300 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View Project
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 border-[#7042f88b] text-white hover:bg-[#7042f81a] transition-all duration-300 ${!liveLink ? 'flex-1' : ''}`}
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;