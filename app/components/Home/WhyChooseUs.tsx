"use client";

/* eslint-disable react/no-unescaped-entities -- This component displays quoted code examples. */

import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck, Code2, ArrowUpRight } from "lucide-react";

const featureCards = [
  {
    id: "engineering",
    title: "Engineering-First Mindset",
    subtitle: "WE LEARN YOUR BUSINESS FIRST",
    description:
      "Before writing a single line of code, we analyze your workflow. We bridge Next.js frontends with robust Laravel/Filament backends built for your exact operational needs.",
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "hover:border-blue-500/40",
    badge: "Core Architecture",
    colSpan: "lg:col-span-2 lg:row-span-2",
    icon: Zap,
    graphicType: "code-preview",
  },
  {
    id: "communication",
    title: "Direct Developer Contact",
    subtitle: "ONE TEAM. ONE CONVERSATION.",
    description:
      "No account managers or delayed ticketing systems. You collaborate directly with the engineers building your Next.js and Laravel applications.",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "hover:border-amber-500/40",
    badge: "Agile Workflow",
    colSpan: "lg:col-span-2 lg:col-start-3 lg:row-start-1",
    icon: Users,
    graphicType: "chat-nodes",
  },
  {
    id: "scoping",
    title: "Honest Technical Scoping",
    subtitle: "TRANSPARENT & SCALABLE",
    description:
      "We recommend the right tech stack for your budget—whether it's a lightweight WordPress solution or a custom headless Lunar/Laravel architecture.",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/40",
    badge: "Client First",
    colSpan: "lg:col-span-2 lg:col-start-3 lg:row-start-2",
    icon: ShieldCheck,
    graphicType: "scale-meter",
  },
  {
    id: "ownership",
    title: "Complete Code Ownership",
    subtitle: "IT WORKS LONG AFTER WE SHIP",
    description:
      "You receive fully documented, clean source code and complete infrastructure ownership across Vercel, cPanel, or custom Linux VPS deployments.",
    accent: "from-purple-500/20 via-cyan-500/10 to-transparent",
    borderGlow: "hover:border-cyan-500/40",
    badge: "Zero Lock-In",
    colSpan: "lg:col-span-4 lg:row-start-3",
    icon: Code2,
    graphicType: "deployment-pipeline",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 sm:py-28">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mb-5 gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md"
          >
            <span>The Full-Stack Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl"
          >
            Engineered For Performance & Long-Term Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            We don&apos;t just build websites that look good—we build scalable web applications with clean databases, fast APIs, and modern frontends.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-blue-500/5 ${card.borderGlow} ${card.colSpan}`}
              >
                {/* Dynamic Card Background Gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Card Content Wrapper */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 mb-4 rounded-xl border border-white/10 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
                        <Icon className="h-3.5 w-3.5 text-blue-400" />
                        <span>{card.badge}</span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      {card.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                  </div>

                  {/* CODE PREVIEW CARD (Large desktop terminal fills empty space) */}
                  {card.graphicType === "code-preview" && (
                    <>
                      {/* Desktop Terminal (Expanded View) */}
                      <div className="relative mt-6 flex-1 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-md hidden md:flex md:flex-col">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-red-500/80" />
                            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">api/v1/projects.ts</span>
                          <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-mono text-blue-400 border border-blue-500/30">Next.js App Router</span>
                        </div>

                        {/* Terminal Body */}
                        <div className="mt-4 flex-1 font-mono text-xs text-slate-300 space-y-2 leading-relaxed overflow-hidden">
                          <p className="text-slate-500">
                            {"// Next.js + Laravel API Integration"}
                          </p>
                          <p className="text-purple-400">
                            <span className="text-blue-400">export async function</span> <span className="text-amber-300">GET</span>() &#123;
                          </p>
                          <p className="pl-4 text-slate-400">
                            <span className="text-blue-400">const</span> res = <span className="text-purple-400">await</span> fetch(<span className="text-emerald-400">&quot;https://api.domain.com/v1/projects&quot;</span>, &#123;
                          </p>
                          <p className="pl-8 text-slate-400">
                            headers: &#123; <span className="text-emerald-400">"Authorization"</span>: <span className="text-emerald-400">`Bearer $&#123;token&#125;`</span> &#125;,
                          </p>
                          <p className="pl-8 text-slate-400">
                            next: &#123; revalidate: <span className="text-amber-300">60</span> &#125;
                          </p>
                          <p className="pl-4 text-slate-400">&#125;);</p>
                          <p className="pl-4 text-purple-400"><span className="text-blue-400">return</span> Response.<span className="text-amber-300">json</span>(<span className="text-purple-400">await</span> res.<span className="text-amber-300">json</span>());</p>
                          <p className="text-purple-400">&#125;</p>
                        </div>

                        {/* Terminal Footer */}
                        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400">200 OK</span>
                            <span className="text-slate-500">• 12ms response</span>
                          </div>
                          <span className="text-slate-500">Filament API</span>
                        </div>
                      </div>

                      {/* Mobile Preview Fallback */}
                      <div className="relative mt-6 min-h-[100px] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-950/80 p-4 md:hidden">
                        <div className="space-y-2 font-mono text-[11px] text-slate-400">
                          <div className="flex items-center gap-1.5 text-blue-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>AppRouter/Page.tsx</span>
                          </div>
                          <p className="text-emerald-400">const res = await fetch("https://api.yourdomain.com");</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* CHAT NODES PREVIEW */}
                  {card.graphicType === "chat-nodes" && (
                    <div className="relative mt-6 min-h-[110px] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-950/80 p-4 backdrop-blur-sm flex items-center justify-around text-xs text-slate-400">
                      <div className="rounded-lg bg-blue-500/20 px-2.5 py-1 text-blue-300 border border-blue-500/30">Client</div>
                      <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500 to-amber-500" />
                      <div className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-amber-300 border border-amber-500/30">Lead Developer</div>
                    </div>
                  )}

                  {/* SCALE METER PREVIEW */}
                  {card.graphicType === "scale-meter" && (
                    <div className="relative mt-6 min-h-[110px] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-950/80 p-4 backdrop-blur-sm flex flex-col justify-center space-y-2 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Optimal Solution</span>
                        <span className="text-emerald-400 font-bold">100% Fit</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400" />
                      </div>
                    </div>
                  )}

                  {/* DEPLOYMENT PIPELINE PREVIEW */}
                  {card.graphicType === "deployment-pipeline" && (
                    <div className="relative mt-6 min-h-[110px] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-950/80 p-4 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-300">
                      <span className="rounded-md bg-slate-800 px-3 py-1.5 border border-white/10 text-center w-full md:w-auto">
                        Vercel/Hosting (Next.js)
                      </span>

                      <span className="text-slate-500 font-bold">
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">↔</span>
                      </span>

                      <span className="rounded-md bg-slate-800 px-3 py-1.5 border border-white/10 text-center w-full md:w-auto">
                        VPS / cPanel (Laravel API)
                      </span>

                      <span className="text-slate-500 font-bold">
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">↔</span>
                      </span>

                      <span className="rounded-md bg-slate-800 px-3 py-1.5 border border-white/10 text-center w-full md:w-auto">
                        MySQL DB
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}