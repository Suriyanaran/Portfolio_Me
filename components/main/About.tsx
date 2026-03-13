"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { ABOUT_DATA } from "@/constants";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto">
                {/* Profile Image */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
                        >
                            <img src={ABOUT_DATA.profileImage} alt="profile" width={250} />
                        </motion.div>
                    )}
                </InView>

                {/* Name Badge */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                {ABOUT_DATA.name}
                            </h1>
                        </motion.div>
                    )}
                </InView>

                {/* Title */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.6)}
                            className="text-gray-300 text-center text-sm md:text-base mb-6"
                        >
                            {ABOUT_DATA.title}
                        </motion.div>
                    )}
                </InView>

                {/* Bio Paragraphs */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-[20px] w-[90%] md:w-3/4 lg:w-2/3 py-[20px] z-[20] mb-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <div className="space-y-4">
                                {ABOUT_DATA.bio.map((paragraph, idx) => (
                                    <p key={idx} className="Welcome-text text-[16px] w-full text-justify leading-relaxed text-gray-300">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* Call to Action */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.a
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            href="#projects"
                            variants={slideInFromBottom}
                            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg z-40 bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            See My Work
                        </motion.a>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default About;