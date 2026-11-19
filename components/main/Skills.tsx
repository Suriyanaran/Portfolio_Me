"use client";

import React from "react";
import { VERIFIED_SKILLS } from "@/constants";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import {
    Layout,
    Server,
    ShieldCheck,
    Bot,
    Wrench,
    CheckCircle2,
} from "lucide-react";

const Skills = () => {
    const categoryIcons: Record<string, React.ReactNode> = {
        "Frontend Development": <Layout className="w-5 h-5 text-cyan-400" />,
        "Backend & APIs": <Server className="w-5 h-5 text-purple-400" />,
        "Security & Post-Quantum Cryptography": (
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
        ),
        "AI & Product Workflows": <Bot className="w-5 h-5 text-amber-400" />,
        "Deployment & Developer Tools": <Wrench className="w-5 h-5 text-pink-400" />,
    };

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-8 max-w-[1500px] mx-auto z-20"
        >
            <SkillText />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {VERIFIED_SKILLS.map((group, groupIdx) => (
                    <motion.div
                        key={groupIdx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                        className={`flex flex-col p-6 rounded-2xl border border-gray-800/80 bg-gradient-to-b from-[#0c0828]/90 to-[#030014]/90 backdrop-blur-md shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-300 group ${
                            groupIdx === 2 ? "md:col-span-2 lg:col-span-1" : ""
                        }`}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2.5 rounded-xl bg-[#130f3a] border border-gray-700/60 group-hover:scale-110 transition-transform">
                                {categoryIcons[group.category] || (
                                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {group.category}
                                </h3>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {group.description}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-transparent my-3"></div>

                        {/* Skills Chips */}
                        <div className="flex flex-wrap gap-2.5 mt-2">
                            {group.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex flex-col px-3 py-1.5 rounded-lg bg-[#07051a] border border-gray-800 hover:border-purple-500/60 hover:bg-[#120e36] transition-all"
                                >
                                    <span className="text-sm font-semibold text-gray-200">
                                        {skill.name}
                                    </span>
                                    {skill.tag && (
                                        <span className="text-[10px] text-gray-400 font-medium tracking-tight">
                                            {skill.tag}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
