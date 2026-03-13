"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";
import { Download, FileText } from "lucide-react";
import { RESUME_DATA } from "@/constants";

const ResumeDownload = () => {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement("a");
        link.href = RESUME_DATA.downloadLink;
        link.download = RESUME_DATA.fileName || "resume.pdf";
        link.target = "_blank";
        link.style.display = "none";
        
        // Append to body and trigger click
        document.body.appendChild(link);
        
        // Use setTimeout to ensure the link is added before clicking
        setTimeout(() => {
            link.click();
            document.body.removeChild(link);
        }, 0);
    };

    return (
        <section id="resume" className="flex flex-col items-center justify-center py-20 px-5">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-center"
                    >
                        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                            Get My Resume
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
                            Download my comprehensive CV to learn more about my experience, skills, and accomplishments
                        </p>
                    </motion.div>
                )}
            </InView>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.button
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromLeft(0.3)}
                        onClick={handleDownload}
                        className="flex items-center gap-3 px-10 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        <FileText className="w-6 h-6" />
                        {RESUME_DATA.ctaText}
                        <Download className="w-5 h-5 ml-2" />
                    </motion.button>
                )}
            </InView>
        </section>
    );
};

export default ResumeDownload;
