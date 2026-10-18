"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const headlineWords = ["Ready", "to", "start", "building?"];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 text-slate-100 md:py-32"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        {/* Animated Stagger Headline */}
        <h2         className="flex flex-wrap items-center justify-center gap-x-[0.3em] font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {headlineWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="inline-block bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-400 md:text-lg"
        >
          Let’s talk about your project. No pressure, just a conversation about
          what’s possible for your web application.
        </motion.p>

        {/* Animated Gradient Border Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10"
        >
          <div className="group relative inline-block rounded-full p-[2px] transition-all duration-300">
            {/* Pulsing Gradient Mesh Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100" />

            <a
              href="https://www.linkedin.com/in/muhammad-umair-20a5462ab/"
              target="_blank"

              className="relative inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-slate-950/90 px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-white backdrop-blur-xl transition-all duration-300 hover:bg-slate-900 hover:text-blue-400 sm:px-10"
            >
              <span>Start A Conversation</span>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Contact Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-4 md:gap-8"
        >
          <a
            href="mailto:rajputumair0301@gmail.com"
            className="group flex min-w-0 max-w-full items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            <Mail className="h-4 w-4 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="break-all font-semibold">rajputumair0301@gmail.com</span>
          </a>

          {/* <a
            href="tel:+923000000000"
            className="group flex min-w-0 max-w-full items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            <Phone className="h-4 w-4 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold">+92 300 0000000</span>
          </a> */}

          <a
            href="https://github.com/Muhammad-Umair10"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 max-w-full items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            <Globe className="h-4 w-4 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold">github.com</span>
          </a>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-8 flex items-start justify-center gap-2 text-xs text-slate-500 sm:items-center"
        >
          <MapPin className="h-3.5 w-3.5 text-blue-500/80" />
          <span className="min-w-0 break-words">Pakistan • Available for Remote & Freelance Contracts Worldwide</span>
        </motion.div>
      </div>
    </section>
  );
}