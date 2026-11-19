"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Technical{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        Skills
                    </span>
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-gray-400 mt-3 text-base sm:text-lg text-center max-w-2xl px-4"
            >
                Hands-on competencies I actively apply and defend in production architectures
            </motion.p>
        </div>
    );
};

export default SkillText;
