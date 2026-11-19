"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { ExternalLink, Menu, X, Mail } from "lucide-react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="w-full h-[68px] fixed top-0 shadow-lg shadow-[#2A0E61]/40 bg-[#030014]/80 backdrop-blur-md z-50 px-4 md:px-10 max-w-[1855px] left-0 right-0 mx-auto transition-all">
            <div className="w-full h-full flex flex-row items-center justify-between">
                {/* Brand Logo & Name */}
                <a
                    href="#home"
                    className="flex flex-row items-center gap-3 group cursor-pointer"
                >
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#7042f88b] bg-[#030014] flex items-center justify-center p-1 group-hover:border-purple-400 transition-colors">
                        <Image
                            src="/logo.png"
                            alt="Suriya Logo"
                            width={36}
                            height={36}
                            className="object-contain group-hover:rotate-12 transition-transform duration-300"
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-gray-100 text-base md:text-lg tracking-wide group-hover:text-purple-300 transition-colors">
                            Suriya
                        </span>
                        <span className="text-[11px] text-purple-400 font-medium -mt-1 hidden sm:block">
                            Founder, EZHA-Q Technologies
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex flex-row items-center justify-center">
                    <div className="flex items-center border border-[#7042f861] bg-[#03001490] px-5 py-2 rounded-full text-gray-200 gap-6 text-sm font-medium shadow-inner shadow-[#7042f820]">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="cursor-pointer hover:text-purple-400 transition-colors py-1 px-1"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Desktop Social & Quick Action Buttons */}
                <div className="hidden md:flex flex-row items-center gap-3 text-white">
                    <a
                        href="https://www.ezhaq.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-purple-500/50 bg-purple-950/40 text-purple-200 hover:bg-purple-900/60 hover:border-purple-400 transition-all"
                        title="EZHA-Q Technologies"
                    >
                        <span>EZHA-Q</span>
                        <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                        href="https://github.com/Suriyanaran/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-700/60 hover:border-purple-400 hover:bg-purple-950/30 transition-all text-gray-300 hover:text-white"
                        aria-label="GitHub Profile"
                    >
                        <RxGithubLogo className="w-4 h-4" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/suriya-narayanan-p-202907338/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-700/60 hover:border-purple-400 hover:bg-purple-950/30 transition-all text-gray-300 hover:text-white"
                        aria-label="LinkedIn Profile"
                    >
                        <RxLinkedinLogo className="w-4 h-4" />
                    </a>

                    <a
                        href="mailto:suriyanarayananpalani@gmail.com"
                        className="p-2 rounded-full border border-gray-700/60 hover:border-purple-400 hover:bg-purple-950/30 transition-all text-gray-300 hover:text-white"
                        aria-label="Email Suriya"
                    >
                        <Mail className="w-4 h-4" />
                    </a>

                    <a
                        href="#contact"
                        className="hidden xl:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 transition-opacity"
                    >
                        Hire / Connect
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="flex lg:hidden items-center gap-2">
                    <a
                        href="https://www.ezhaq.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full border border-purple-500/50 bg-purple-950/40 text-purple-200"
                    >
                        EZHA-Q
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-purple-400 rounded-lg"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden w-full bg-[#030014]/95 backdrop-blur-xl border-b border-[#7042f861] px-6 py-5 flex flex-col gap-4 shadow-2xl transition-all">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-200 hover:text-purple-400 text-base font-medium py-1 transition-colors border-b border-gray-800/40"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-row items-center justify-between pt-3 border-t border-gray-800/80">
                        <span className="text-xs text-gray-400">Connect with Suriya:</span>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/Suriyanaran/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-gray-700 text-gray-200 hover:text-white"
                                aria-label="GitHub"
                            >
                                <RxGithubLogo className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/suriya-narayanan-p-202907338/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-gray-700 text-gray-200 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <RxLinkedinLogo className="w-4 h-4" />
                            </a>
                            <a
                                href="mailto:suriyanarayananpalani@gmail.com"
                                className="p-2 rounded-full border border-gray-700 text-gray-200 hover:text-white"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-center py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                    >
                        Get in Touch
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
