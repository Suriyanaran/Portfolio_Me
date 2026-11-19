"use client";

import React from "react";
import { SERVICES_DATA } from "@/constants";
import { motion } from "framer-motion";
import {
    Globe,
    LayoutDashboard,
    Bot,
    MessageSquare,
    Server,
    ShieldAlert,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const Services = () => {
    const serviceIcons: Record<string, React.ReactNode> = {
        Globe: <Globe className="w-6 h-6 text-cyan-400" />,
        LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
        Bot: <Bot className="w-6 h-6 text-indigo-400" />,
        MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-400" />,
        Server: <Server className="w-6 h-6 text-amber-400" />,
        ShieldAlert: <ShieldAlert className="w-6 h-6 text-pink-400" />,
    };

    return (
        <section
            id="services"
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 max-w-[1500px] mx-auto z-20 relative"
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
                    Services /{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        What I Build
                    </span>
                </h2>
                <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                    End-to-end engineering solutions, secure software foundations, and practical business automation for founders, companies, and clients.
                </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {SERVICES_DATA.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="flex flex-col justify-between p-7 rounded-2xl border border-gray-800/80 bg-gradient-to-b from-[#0c0828]/90 to-[#030014]/90 backdrop-blur-md shadow-lg hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div>
                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-[#140e3b] border border-gray-700/60 group-hover:scale-110 transition-transform">
                                    {serviceIcons[service.icon] || (
                                        <Globe className="w-6 h-6 text-purple-400" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-5">
                                {service.description}
                            </p>

                            {/* Bullets */}
                            <div className="space-y-2.5 pt-3 border-t border-gray-800/60">
                                {service.bullets.map((bullet, bIdx) => (
                                    <div
                                        key={bIdx}
                                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-400"
                                    >
                                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                                        <span>{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom action hint */}
                        <div className="mt-6 pt-4 border-t border-gray-800/40">
                            <a
                                href="#contact"
                                className="text-xs font-semibold text-purple-400 group-hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Request this service</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-14 w-full p-8 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-950/40 via-[#07051a]/80 to-cyan-950/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6"
            >
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        Have a project in mind or need custom software?
                    </h4>
                    <p className="text-sm text-gray-300">
                        Let&apos;s build a secure, fast, and scalable solution together.
                    </p>
                </div>
                <a
                    href="#contact"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm sm:text-base hover:opacity-95 shadow-lg shadow-purple-600/30 whitespace-nowrap transition-all"
                >
                    Discuss Your Project
                </a>
            </motion.div>
        </section>
    );
};

export default Services;
