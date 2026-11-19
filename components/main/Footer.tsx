import React from "react";
import Image from "next/image";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { Mail, ExternalLink, ShieldCheck } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#030014]/90 text-gray-300 border-t border-[#7042f840] pt-12 pb-8 px-6 md:px-12 z-20 relative">
            <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-gray-800/80">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-2 max-w-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/50 p-1 bg-[#030014]">
                                <Image
                                    src="/logo.png"
                                    alt="Suriya"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-extrabold text-xl text-white tracking-tight">
                                Suriya Narayanan
                            </span>
                        </div>
                        <p className="text-xs text-purple-300 font-semibold">
                            Founder, EZHA-Q Technologies | Full-Stack Developer
                        </p>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Building secure, AI-powered, and automation-focused software products. Working on secure messaging, post-quantum cryptography, AI tools, APIs, and web applications.
                        </p>
                    </div>

                    {/* Quick Section Links */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                        <a href="#home" className="hover:text-purple-400 transition-colors">
                            Home
                        </a>
                        <a href="#about" className="hover:text-purple-400 transition-colors">
                            About
                        </a>
                        <a href="#skills" className="hover:text-purple-400 transition-colors">
                            Skills
                        </a>
                        <a href="#services" className="hover:text-purple-400 transition-colors">
                            Services
                        </a>
                        <a href="#projects" className="hover:text-purple-400 transition-colors">
                            Projects
                        </a>
                        <a href="#resume" className="hover:text-purple-400 transition-colors">
                            Resume
                        </a>
                        <a href="#contact" className="hover:text-purple-400 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Social & Venture Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.ezhaq.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-200 text-xs font-semibold hover:bg-cyan-900/50 transition-all"
                            title="EZHA-Q Technologies"
                        >
                            <span>EZHA-Q</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>

                        <a
                            href="https://github.com/Suriyanaran/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-gray-700 bg-[#07051a] hover:border-purple-400 hover:text-white transition-all text-gray-300"
                            aria-label="GitHub Profile"
                        >
                            <RxGithubLogo className="w-4 h-4" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/suriya-narayanan-p-202907338/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-gray-700 bg-[#07051a] hover:border-blue-400 hover:text-white transition-all text-gray-300"
                            aria-label="LinkedIn Profile"
                        >
                            <RxLinkedinLogo className="w-4 h-4 text-blue-400" />
                        </a>

                        <a
                            href="mailto:suriyanarayananpalani@gmail.com"
                            className="p-2 rounded-lg border border-gray-700 bg-[#07051a] hover:border-purple-400 hover:text-white transition-all text-gray-300"
                            aria-label="Email Suriya"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                        <span>Designed with post-quantum security & founder-grade aesthetics.</span>
                    </div>
                    <div>
                        &copy; 2026 Suriya Narayanan. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
