"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
    ExternalLink,
    CheckCircle2,
    Shield,
    Layers,
    ChevronRight,
    Maximize2,
    X,
} from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";

interface ScreenshotTab {
    name: string;
    description: string;
}

interface Props {
    src?: string;
    title: string;
    role?: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    tags?: string[];
    featured?: boolean;
    features?: string[];
    screenshotsInfo?: {
        label: string;
        tabs: ScreenshotTab[];
    };
}

const ProjectCard = ({
    src,
    title,
    role = "Founder & Developer",
    description,
    githubLink,
    liveLink,
    tags = [],
    featured = true,
    features = [],
    screenshotsInfo,
}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="flex flex-col h-full rounded-2xl border border-[#7042f88b] bg-gradient-to-b from-[#0c0828]/95 to-[#030014]/95 backdrop-blur-md shadow-xl shadow-[#2A0E61]/25 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden group">
                {/* Image & Preview Header */}
                {src && (
                    <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#07051a] border-b border-gray-800/80">
                        <Image
                            src={src}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0828] via-transparent to-transparent opacity-80"></div>

                        {/* Top Badges */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                            <span className="px-3 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-purple-200 text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-md">
                                <Shield className="w-3.5 h-3.5 text-purple-400" />
                                {role}
                            </span>

                            <button
                                onClick={() => setModalOpen(true)}
                                className="pointer-events-auto p-1.5 rounded-lg bg-black/60 border border-gray-700/80 text-gray-200 hover:text-white hover:bg-black/80 backdrop-blur-md transition-all"
                                title="Expand image preview"
                                aria-label="Expand preview"
                            >
                                <Maximize2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Body Content */}
                <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
                    <div>
                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-3">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-5">
                            {description}
                        </p>

                        {/* Feature Highlights */}
                        {features.length > 0 && (
                            <div className="mb-5 p-4 rounded-xl bg-[#070519]/80 border border-gray-800/80">
                                <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                                    Key Capabilities
                                </h4>
                                <ul className="space-y-1.5">
                                    {features.map((feat, fIdx) => (
                                        <li
                                            key={fIdx}
                                            className="text-xs text-gray-300 flex items-start gap-2"
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Screenshots / Module Views Tabs (if present) */}
                        {screenshotsInfo && (
                            <div className="mb-5">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                                    {screenshotsInfo.label}
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    {screenshotsInfo.tabs.map((tab, tIdx) => (
                                        <button
                                            key={tIdx}
                                            type="button"
                                            onClick={() => setActiveTab(tIdx)}
                                            className={`p-2 rounded-lg text-left border transition-all ${
                                                activeTab === tIdx
                                                    ? "border-purple-500/70 bg-purple-950/40 text-purple-200"
                                                    : "border-gray-800/80 bg-[#070519]/50 text-gray-400 hover:text-gray-300"
                                            }`}
                                        >
                                            <div className="text-xs font-semibold text-white">
                                                {tab.name}
                                            </div>
                                            <div className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">
                                                {tab.description}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tech Stack Tags */}
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#120f38] text-purple-200 border border-purple-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800/80">
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-95 shadow-md shadow-purple-600/30 transition-all"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Platform</span>
                            </a>
                        )}

                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-700/80 bg-[#07051a] text-gray-200 hover:text-white hover:border-purple-400 hover:bg-purple-950/40 font-semibold text-sm transition-all ${
                                    !liveLink ? "flex-1" : ""
                                }`}
                            >
                                <RxGithubLogo className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal for full screen image preview */}
            {modalOpen && src && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] bg-[#0c0828] rounded-2xl border border-purple-500/60 overflow-hidden shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#050314]">
                            <h4 className="text-white font-bold text-base sm:text-lg">
                                {title} — Preview
                            </h4>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative w-full h-[65vh] bg-black">
                            <Image
                                src={src}
                                alt={title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
