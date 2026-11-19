"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { PROJECTS_DATA } from "@/constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 max-w-[1550px] mx-auto z-20 relative"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Featured{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        Projects
                    </span>
                </h2>
                <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                    Flagship products and cryptographic toolkits founded and engineered by Suriya.
                </p>
            </motion.div>

            {/* Projects Grid: 1 col on mobile, 2 col on tablet, 3 col on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                {PROJECTS_DATA.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="h-full flex"
                    >
                        <ProjectCard
                            src={project.image}
                            title={project.title}
                            role={project.role}
                            description={project.description}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            tags={project.tags}
                            featured={project.featured}
                            features={project.features}
                            screenshotsInfo={project.screenshotsInfo}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
