"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { HERO_DATA } from "@/constants";

const HeroContent = () => {
    const badges = [HERO_DATA.badge1, HERO_DATA.badge2, HERO_DATA.badge3];

    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                        {/* Badges Section */}
                        <div className="hidden md:flex flex-row items-center md:gap-5 gap-1 flex-wrap">
                            {badges.map((badge, idx) => (
                                <InView triggerOnce={false} key={idx}>
                                    {({ inView, ref }) => (
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                            variants={slideInFromTop}
                                            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                        >
                                            <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                            <h1 className="Welcome-text text-[13px]">
                                                {badge}
                                            </h1>
                                        </motion.div>
                                    )}
                                </InView>
                            ))}
                        </div>

                        {/* Main Title */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                                >
                                    <span>
                                        {HERO_DATA.mainTitle}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}
                                            {HERO_DATA.highlight1}{" "}
                                        </span>
                                        {HERO_DATA.subtitle1}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}
                                            {HERO_DATA.highlight2}{" "}
                                        </span>
                                        {HERO_DATA.subtitle2}
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        {/* Description */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-lg text-gray-400 max-w-[500px]"
                                >
                                    {HERO_DATA.description}
                                </motion.p>
                            )}
                        </InView>
                    </div>

                    {/* Right Side - Illustration */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="work icons"
                                    height={650}
                                    width={650}
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;