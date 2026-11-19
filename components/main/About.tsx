"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/constants";
import { Shield, Bot, Code, Handshake, ExternalLink, ArrowRight } from "lucide-react";

const About = () => {
    const focusIcons: Record<string, React.ReactNode> = {
        Building2: <Shield className="w-5 h-5 text-purple-400" />,
        ShieldCheck: <Shield className="w-5 h-5 text-cyan-400" />,
        Bot: <Bot className="w-5 h-5 text-indigo-400" />,
        Handshake: <Handshake className="w-5 h-5 text-pink-400" />,
    };

    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center min-h-screen w-full py-20 px-4 sm:px-8 max-w-[1500px] mx-auto relative z-20"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    About{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        Me
                    </span>
                </h2>
                <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-xl mx-auto">
                    Founder, engineer, and product builder focused on secure, quantum-ready, and AI-driven software.
                </p>
            </motion.div>

            {/* Main Content Grid: Left Profile Card, Right Bio & Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">
                {/* Left Card: Profile Image & Founder Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-5 flex flex-col items-center text-center p-8 rounded-2xl border border-[#7042f88b] bg-gradient-to-b from-[#0e072b]/90 to-[#030014]/90 backdrop-blur-md shadow-xl shadow-[#2A0E61]/30 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Profile Image with Glowing Ring */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-purple-500/80 p-1.5 shadow-2xl shadow-purple-600/40 mb-6 bg-gradient-to-tr from-purple-900 to-cyan-900">
                        <Image
                            src={ABOUT_DATA.profileImage}
                            alt={ABOUT_DATA.name}
                            width={240}
                            height={240}
                            className="rounded-full object-cover w-full h-full"
                            priority
                        />
                    </div>

                    {/* Name & Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {ABOUT_DATA.name}
                    </h3>
                    <div className="px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
                        {ABOUT_DATA.title}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Leading engineering at{" "}
                        <a
                            href="https://www.ezhaq.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 font-semibold hover:underline inline-flex items-center gap-1"
                        >
                            EZHA-Q Technologies
                            <ExternalLink className="w-3 h-3" />
                        </a>
                        , creating secure communication platforms and AI workflows.
                    </p>

                    {/* Quick Availability Badge */}
                    <div className="w-full py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-medium flex items-center justify-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Open for Collaborations & Freelance Projects</span>
                    </div>
                </motion.div>

                {/* Right Card: Explicit Bio Statements & Core Focus Areas */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-7 flex flex-col gap-6"
                >
                    {/* Bio Box */}
                    <div className="p-7 sm:p-9 rounded-2xl border border-[#7042f88b] bg-[#0c0828]/80 backdrop-blur-md shadow-lg shadow-[#7042f81a]">
                        <h4 className="text-lg font-semibold text-purple-300 uppercase tracking-wider text-xs mb-4">
                            Background & Vision
                        </h4>
                        <div className="space-y-3.5 text-gray-200 text-base sm:text-lg leading-relaxed">
                            {ABOUT_DATA.paragraphs.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-300">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Focus Pillars Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ABOUT_DATA.highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-xl border border-gray-800/80 bg-[#070519]/70 hover:border-purple-500/50 hover:bg-[#0f0b33]/60 transition-all duration-300 flex flex-col gap-2"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30">
                                        {focusIcons[item.icon] || <Code className="w-5 h-5 text-purple-400" />}
                                    </div>
                                    <h5 className="font-semibold text-white text-sm sm:text-base">
                                        {item.title}
                                    </h5>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-400 leading-normal">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm sm:text-base hover:opacity-95 shadow-lg shadow-purple-600/30 transition-all"
                        >
                            <span>Explore Featured Projects</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/50 bg-[#030014]/60 text-purple-200 font-semibold text-sm sm:text-base hover:bg-purple-950/40 hover:text-white transition-all"
                        >
                            <span>Let&apos;s Connect</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
