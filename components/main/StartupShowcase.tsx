"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { STARTUP_DATA } from "@/constants";

const StartupShowcase = () => {
    return (
        <section
            id="startup"
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 max-w-[1500px] mx-auto z-20 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    Founder Venture
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Building{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        EZHA-Q Technologies
                    </span>
                </h2>
                <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                    {STARTUP_DATA.tagline}
                </p>
            </motion.div>

            {/* Venture Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full max-w-4xl p-8 sm:p-12 rounded-3xl border border-cyan-500/50 bg-gradient-to-br from-[#0c0828]/95 via-[#060a22]/90 to-[#030014]/95 backdrop-blur-md shadow-2xl shadow-cyan-950/40 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex flex-col gap-6 relative z-10">
                    <div>
                        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
                            Official Venture
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-3">
                            {STARTUP_DATA.name}
                        </h3>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                            {STARTUP_DATA.description}
                        </p>
                    </div>

                    {/* Focus Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-800/80">
                        {STARTUP_DATA.pillars.map((pillar, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#090b20]/70 border border-gray-800 flex flex-col gap-2"
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                                    <h4 className="font-bold text-white text-sm">
                                        {pillar.title}
                                    </h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href={STARTUP_DATA.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all"
                        >
                            <span>Visit www.ezhaq.in</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>

                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 text-cyan-200 font-semibold text-sm sm:text-base hover:bg-cyan-950/40 transition-all"
                        >
                            <span>Contact EZHA-Q</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default StartupShowcase;
