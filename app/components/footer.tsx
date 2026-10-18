"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUp, Code2, Terminal } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative overflow-hidden bg-slate-950 border-t border-white/10 text-slate-400">
            {/* Background Ambient Glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand & Bio Column (Spans 2 columns on desktop) */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <span className="font-display text-xl font-bold text-white tracking-tight">
                                Muhammad Umair
                            </span>
                        </div>

                        <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                            Full-Stack Software Engineer specializing in modern Next.js
                            frontends, robust Laravel REST APIs, custom Filament admin tools,
                            and performance SEO.
                        </p>

                        {/* Live Status Badge */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span>Available for Freelance & Full-Time Contracts</span>
                        </div>
                    </div>

                    {/* Quick Navigation Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Navigation
                        </h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <Link
                                    href="#services"
                                    className="transition-colors hover:text-blue-400"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="transition-colors hover:text-blue-400"
                                >
                                    Project Showcase
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="transition-colors hover:text-blue-400"
                                >
                                    About & Stack
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="transition-colors hover:text-blue-400"
                                >
                                    Technical Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="transition-colors hover:text-blue-400"
                                >
                                    Contact Studio
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Core Capabilities */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Capabilities
                        </h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li className="text-slate-400">Next.js & React Apps</li>
                            <li className="text-slate-400">Laravel & Filament PHP</li>
                            <li className="text-slate-400">Headless Lunar E-Commerce</li>
                            <li className="text-slate-400">LTR ↔ RTL Localization</li>
                            <li className="text-slate-400">On-Page SEO & Content</li>
                        </ul>
                    </div>

                    {/* Social & Contact Column */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Get in Touch
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:rajputumair@gmail.com"
                                    className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
                                >
                                    <Mail className="h-4 w-4 text-blue-400" />
                                    <span>rajputumair@gmail.com</span>
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="tel:+923000000000"
                                    className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
                                >
                                    <Phone className="h-4 w-4 text-blue-400" />
                                    <span>+92 300 0000000</span>
                                </a>
                            </li> */}
                        </ul>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://github.com/Muhammad-Umair10"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="flex h-10 w-10 items-center justify-center hover:text-white"
                            >
                                <img
                                    src="https://cdn.simpleicons.org/github/FFFFFF"
                                    alt="github"
                                    width="48"
                                    height="48"
                                    loading="lazy"
                                    className="h-14 w-14 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammad-umair-20a5462ab/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="flex h-10 w-10 items-center justify-center"
                            >
                                <Image
                                    src="/assets/linkdin.svg"
                                    alt="LinkedIn"
                                    width="48"
                                    height="48"
                                    loading="lazy"
                                    className="h-14 w-14 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar & Copyright */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 text-blue-500" />
                        <span>
                            © {new Date().getFullYear()} Muhammad Umair. Built with Next.js,
                            Tailwind CSS & Vercel.
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span>Deployed on Edge</span>
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                        >
                            <span>Back to top</span>
                            <ArrowUp className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}