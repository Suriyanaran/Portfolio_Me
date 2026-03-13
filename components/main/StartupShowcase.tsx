"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { Lightbulb, Target, Zap, ExternalLink } from "lucide-react";
import { STARTUP_DATA } from "@/constants";

const StartupShowcase = () => {
    return (
        <section id="startup" className="flex flex-col items-center justify-center py-20 px-5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-center z-10 mb-12"
                    >
                        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                            My Startup Venture
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Building the future of secure technology
                        </p>
                    </motion.div>
                )}
            </InView>

            {/* Main Startup Card */}
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromLeft(0.3)}
                        className="max-w-4xl w-full relative z-10"
                    >
                        <div className="rounded-2xl border-2 border-blue-500 p-8 md:p-12 bg-gradient-to-br from-[#0300145e] to-[#0a0033]/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                            {/* Startup Info */}
                            <div className="mb-8">
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                                    {STARTUP_DATA.name}
                                </h3>
                                <p className="text-xl text-gray-300 font-semibold mb-4">
                                    {STARTUP_DATA.tagline}
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {STARTUP_DATA.description}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[#001a33]/50 border border-blue-500/30">
                                    <Lightbulb className="w-6 h-6 text-blue-400" />
                                    <h4 className="font-bold text-white">Innovation</h4>
                                    <p className="text-sm text-gray-400">
                                        Cutting-edge quantum-safe cryptography solutions
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[#001a33]/50 border border-blue-500/30">
                                    <Target className="w-6 h-6 text-blue-400" />
                                    <h4 className="font-bold text-white">Mission</h4>
                                    <p className="text-sm text-gray-400">
                                        Making PQC accessible for enterprises
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[#001a33]/50 border border-blue-500/30">
                                    <Zap className="w-6 h-6 text-blue-400" />
                                    <h4 className="font-bold text-white">Impact</h4>
                                    <p className="text-sm text-gray-400">
                                        Securing the quantum computing era
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex gap-4 pt-6 border-t border-blue-500/20">
                                <a
                                    href={STARTUP_DATA.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                                >
                                    Visit Website
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="#projects"
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-400 font-bold hover:bg-blue-500/10 transition-all duration-300"
                                >
                                    See Our Products
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </InView>

            {/* Stats Section */}
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromRight(0.5)}
                        className="mt-16 max-w-3xl w-full z-10"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Founded", value: "2024" },
                                { label: "Status", value: "Active" },
                                { label: "Focus Area", value: "Quantum Safe" },
                                { label: "Team Size", value: "3+" },
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-4 rounded-lg border border-[#7042f88b] bg-[#0300145e]"
                                >
                                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </InView>
        </section>
    );
};

export default StartupShowcase;
