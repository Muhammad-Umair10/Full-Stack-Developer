import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative flex min-h-[680px] flex-col justify-end p-3 sm:min-h-screen">
            <div className="pointer-events-none absolute inset-3 z-0 flex items-center justify-center p-1">
                <div className="pointer-events-auto relative h-full min-h-0 w-full max-w-[1800px] overflow-hidden rounded-2xl bg-black shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10">
                    <Image
                        src="/assets/hero-section.png"
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 768px) calc(100vw - 24px), min(99vw, 1800px)"
                        className="object-cover object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center px-6 py-24 sm:px-10 md:px-14 lg:px-20">
                        <div className="pointer-events-auto w-full max-w-3xl text-left">
                            <p className="lg:mt-10 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
                                Muhammad Umair · Portfolio
                            </p>
                            <h1 className="break-words text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                Full-Stack Web Development & Custom Web Applications
                            </h1>
                            <p className="mt-4 max-w-2xl text-lg font-medium leading-snug text-white/90 sm:text-xl md:text-2xl">
                                Building high-performance Next.js interfaces powered by robust Laravel backends, Lunar PHP e-commerce, and Filament admin panels.
                            </p>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                                Custom web applications, headless e-commerce, WordPress solutions, RTL localization, and Python automation.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#projects"
                                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-colors hover:bg-white/85 sm:w-auto"
                                >
                                    Explore case studies
                                </a>
                                <a
                                    href="#about"
                                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/50 bg-black/25 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
                                >
                                    About me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection