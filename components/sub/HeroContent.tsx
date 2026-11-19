"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { HERO_DATA } from "@/constants";
import { ExternalLink, ArrowDown, Mail, Shield } from "lucide-react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const HeroContent = () => {
    const badges = [HERO_DATA.badge1, HERO_DATA.badge2, HERO_DATA.badge3];

    return (
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-10 md:gap-8 md:px-14 px-6 pt-28 md:pt-36 pb-16 w-full z-20 max-w-[1700px] mx-auto">
            {/* Left Column: Founder Persona & Intro */}
            <div className="h-full w-full lg:w-7/12 flex flex-col gap-6 justify-center text-start">
                {/* Badges Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromTop}
                    className="flex flex-row items-center gap-2.5 sm:gap-3 flex-wrap"
                >
                    {badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="Welcome-box py-[6px] px-[12px] border border-[#7042f88b] bg-[#03001470] opacity-[0.95] text-xs sm:text-sm font-medium"
                        >
                            <BsStars className="text-[#b49bff] mr-[8px] h-4 w-4" />
                            <span className="Welcome-text font-medium">
                                {badge}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Main Title & Founder Identity */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromLeft(0.2)}
                    className="flex flex-col gap-2 mt-2 z-20"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                            {HERO_DATA.name}
                        </span>
                    </h1>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
                            Founder,{" "}
                            <a
                                href={HERO_DATA.links.ezhaq}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:underline inline-flex items-center gap-1"
                            >
                                EZHA-Q Technologies
                                <ExternalLink className="w-4 h-4 text-cyan-400 inline" />
                            </a>
                        </span>
                        <span className="text-gray-500 hidden sm:inline">|</span>
                        <span className="text-lg sm:text-2xl font-medium text-purple-300">
                            Full-Stack Developer
                        </span>
                    </div>
                </motion.div>

                {/* Short Intro */}
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromLeft(0.4)}
                    className="text-base sm:text-lg text-gray-300 max-w-[620px] leading-relaxed font-normal bg-[#030014]/40 p-1 rounded-lg"
                >
                    {HERO_DATA.description}
                </motion.p>

                {/* Interactive Buttons & Links (Founder Focused) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromLeft(0.6)}
                    className="flex flex-wrap items-center gap-3.5 pt-2 z-30"
                >
                    {/* 1. View Projects (Primary) */}
                    <a
                        href={HERO_DATA.links.projects}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <span>View Projects</span>
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                    </a>

                    {/* 2. EZHA-Q Technologies */}
                    <a
                        href={HERO_DATA.links.ezhaq}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500/60 bg-cyan-950/30 text-cyan-200 font-semibold text-sm sm:text-base hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span>EZHA-Q Technologies</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    {/* 3. GitHub */}
                    <a
                        href={HERO_DATA.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-700/80 bg-[#0c0d21]/70 text-gray-200 font-medium text-sm sm:text-base hover:border-purple-400 hover:text-white hover:bg-purple-950/40 transition-all"
                        aria-label="GitHub Profile"
                    >
                        <RxGithubLogo className="w-5 h-5" />
                        <span>GitHub</span>
                    </a>

                    {/* 4. LinkedIn */}
                    <a
                        href={HERO_DATA.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-700/80 bg-[#0c0d21]/70 text-gray-200 font-medium text-sm sm:text-base hover:border-blue-400 hover:text-white hover:bg-blue-950/40 transition-all"
                        aria-label="LinkedIn Profile"
                    >
                        <RxLinkedinLogo className="w-5 h-5 text-blue-400" />
                        <span>LinkedIn</span>
                    </a>

                    {/* 5. Contact / Email */}
                    <a
                        href={HERO_DATA.links.contact}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl border border-purple-500/60 bg-purple-950/30 text-purple-200 font-medium text-sm sm:text-base hover:border-purple-400 hover:text-white hover:bg-purple-900/40 transition-all"
                    >
                        <Mail className="w-4 h-4 text-purple-300" />
                        <span>Contact / Email</span>
                    </a>
                </motion.div>
            </div>

            {/* Right Column: Visual Graphic */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromRight(0.5)}
                className="w-full sm:w-4/5 lg:w-5/12 h-full flex justify-center items-center z-20 relative"
            >
                <div className="relative w-full max-w-[540px]">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl -z-10 pointer-events-none"></div>
                    <Image
                        src="/mainIconsdark.svg"
                        alt="Software & Cryptography Stack"
                        height={580}
                        width={580}
                        priority
                        className="w-full h-auto drop-shadow-[0_15px_30px_rgba(112,66,248,0.25)]"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroContent;
