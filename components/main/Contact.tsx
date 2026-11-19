"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_DATA } from "@/constants";
import {
    Mail,
    Phone,
    MessageCircle,
    MapPin,
    ExternalLink,
    CheckCircle2,
    Copy,
    Check,
    Globe,
    ArrowUpRight,
} from "lucide-react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(CONTACT_DATA.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const contactChannels = [
        {
            title: "Direct Email",
            value: CONTACT_DATA.email,
            subtitle: "Best for project proposals, contracts & inquiries",
            icon: <Mail className="w-5 h-5 text-purple-400" />,
            action: (
                <div className="flex items-center gap-2 mt-3">
                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs font-semibold hover:bg-purple-900/60 transition-all"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Email</span>
                            </>
                        )}
                    </button>
                    <a
                        href={`mailto:${CONTACT_DATA.email}`}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-700 bg-[#07051a] text-gray-200 text-xs font-semibold hover:text-white hover:border-purple-400 transition-all"
                    >
                        <span>Send Mail</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            ),
        },
        {
            title: "Phone & Direct Call",
            value: CONTACT_DATA.phone,
            subtitle: "Direct voice call for urgent discussions",
            icon: <Phone className="w-5 h-5 text-cyan-400" />,
            action: (
                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={`tel:${CONTACT_DATA.phone}`}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 text-xs font-semibold hover:bg-cyan-900/60 transition-all"
                    >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            ),
        },
        {
            title: "WhatsApp Direct",
            value: "Instant Messaging",
            subtitle: "Fastest response channel for project discussions",
            icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
            action: (
                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={CONTACT_DATA.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold hover:bg-emerald-900/60 transition-all"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            ),
        },
        {
            title: "LinkedIn Profile",
            value: "Suriya Narayanan",
            subtitle: "Professional network, endorsements & career history",
            icon: <RxLinkedinLogo className="w-5 h-5 text-blue-400" />,
            action: (
                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={CONTACT_DATA.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-200 text-xs font-semibold hover:bg-blue-900/60 transition-all"
                    >
                        <RxLinkedinLogo className="w-3.5 h-3.5" />
                        <span>Connect on LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            ),
        },
        {
            title: "GitHub Repositories",
            value: "Suriyanaran",
            subtitle: "Source code, cryptographic toolkits & public commits",
            icon: <RxGithubLogo className="w-5 h-5 text-gray-200" />,
            action: (
                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={CONTACT_DATA.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-gray-700 bg-[#07051a] text-gray-200 text-xs font-semibold hover:border-purple-400 hover:text-white transition-all"
                    >
                        <RxGithubLogo className="w-3.5 h-3.5" />
                        <span>Explore GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            ),
        },
        {
            title: "EZHA-Q Technologies",
            value: "www.ezhaq.in",
            subtitle: "Official venture website & enterprise security products",
            icon: <Globe className="w-5 h-5 text-purple-400" />,
            action: (
                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={CONTACT_DATA.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-950/60 to-cyan-950/60 border border-purple-500/40 text-purple-200 text-xs font-semibold hover:border-cyan-400 hover:text-white transition-all"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Visit Official Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            ),
        },
    ];

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 max-w-[1400px] mx-auto z-20 relative"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Get In{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        Touch
                    </span>
                </h2>
                <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-xl mx-auto">
                    Open to software development opportunities, freelance projects, and collaborations. Reach out directly through any channel below.
                </p>
            </motion.div>

            {/* Centered Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {contactChannels.map((channel, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="flex flex-col justify-between p-6 rounded-2xl border border-gray-800/80 bg-gradient-to-b from-[#0c0828]/90 to-[#030014]/90 backdrop-blur-md shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-300 group"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 rounded-xl bg-[#130f3a] border border-gray-700/60 group-hover:scale-110 transition-transform">
                                    {channel.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {channel.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 font-medium break-all">
                                        {channel.value}
                                    </p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                {channel.subtitle}
                            </p>
                        </div>
                        {channel.action}
                    </motion.div>
                ))}
            </div>

            {/* Bottom Status Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 w-full p-6 sm:p-7 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/30 via-[#070519]/70 to-cyan-950/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 shrink-0">
                        <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">
                            Location: {CONTACT_DATA.location}
                        </div>
                        <div className="text-xs text-gray-400">
                            Available for remote engagements worldwide and on-site collaborations.
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{CONTACT_DATA.availabilityNote}</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
