"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { RESUME_DATA } from "@/constants";

const ResumeDownload = () => {
    return (
        <section
            id="resume"
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 max-w-[1200px] mx-auto z-20 relative"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                    Resume &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        Credentials
                    </span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
                    Download my latest resume covering technical competencies, founder leadership, and software projects.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col items-center gap-5 w-full max-w-md p-8 rounded-2xl border border-[#7042f88b] bg-gradient-to-b from-[#0c0828]/90 to-[#030014]/90 backdrop-blur-md shadow-xl shadow-purple-950/30"
            >
                <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-500/40 text-purple-300">
                    <FileText className="w-10 h-10" />
                </div>

                <div className="text-center">
                    <div className="font-bold text-white text-lg">
                        Suriya Palani
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                        Founder & Software Developer | EZHA-Q Technologies
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2 pt-2 border-t border-gray-800 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Skills & Production Architectures</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Post-Quantum & Full-Stack Projects</span>
                    </div>
                </div>

                <a
                    href={RESUME_DATA.downloadLink}
                    download={RESUME_DATA.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-bold text-base hover:opacity-95 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Download className="w-5 h-5" />
                    <span>{RESUME_DATA.ctaText}</span>
                </a>
            </motion.div>
        </section>
    );
};

export default ResumeDownload;
