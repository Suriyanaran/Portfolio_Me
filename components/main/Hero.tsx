import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden" id="home">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="rotate-180 absolute md:top-[-280px] lg:top-[-340px] top-[-380px] left-0 z-[1] w-full h-full object-cover opacity-60 pointer-events-none"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </section>
    );
};

export default Hero;
