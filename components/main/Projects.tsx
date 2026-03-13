"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { PROJECTS_DATA } from "@/constants";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 px-5"
            id="projects"
        >
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
                    >
                        My Projects
                    </motion.h1>
                )}
            </InView>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromLeft(0.3)}
                        className="text-gray-400 text-center max-w-2xl mb-12 text-lg"
                    >
                        A showcase of work spanning quantum computing, cybersecurity, and modern full-stack development
                    </motion.p>
                )}
            </InView>

            {/* Projects Grid - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {PROJECTS_DATA.map((project, idx) => (
                    <InView key={project.id} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.4 + idx * 0.1)}
                            >
                                <ProjectCard
                                    src={project.image}
                                    title={project.title}
                                    description={project.description}
                                    githubLink={project.githubLink}
                                    liveLink={project.liveLink}
                                    tags={project.tags}
                                    featured={false}
                                />
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>
        </div>
    );
};

export default Projects;