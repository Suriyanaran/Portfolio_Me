"use client";

import {
    SKILLS_BY_CATEGORY,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import { Code2, Boxes, Zap } from "lucide-react";

interface SkillCategory {
    skill_name: string;
    Image: string;
    width: number;
    height: number;
}

interface CategorizedSkills {
    languages: SkillCategory[];
    frameworks: SkillCategory[];
    specialized: SkillCategory[];
    core: SkillCategory[];
}

const Skills = () => {
    const skillCategories: Array<{
        name: string;
        icon: React.ReactNode;
        skills: SkillCategory[];
        color: string;
    }> = [
        {
            name: "Languages",
            icon: <Code2 className="w-6 h-6" />,
            skills: SKILLS_BY_CATEGORY.languages,
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Frameworks",
            icon: <Boxes className="w-6 h-6" />,
            skills: SKILLS_BY_CATEGORY.frameworks,
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Specialized",
            icon: <Zap className="w-6 h-6" />,
            skills: SKILLS_BY_CATEGORY.specialized,
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-20"
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-[95%] gap-8">
                {skillCategories.map((category, categoryIdx) => (
                    <div key={categoryIdx} className="w-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.3 + categoryIdx * 0.1)}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                        {category.name}
                                    </h3>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5 + categoryIdx * 0.1)}
                                    className="rounded-lg text-white w-full py-6 px-6 border border-[#7042f88b] opacity-[0.9]"
                                >
                                    <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
                                        {category.skills.map((skill, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={skill.Image}
                                                width={skill.width}
                                                height={skill.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
