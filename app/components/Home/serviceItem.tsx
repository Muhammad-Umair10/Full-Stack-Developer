"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MonitorSmartphone,
  Smartphone,
  Server,
  Lightbulb,
} from "lucide-react";
import InteractiveCard from "../ui/InteractiveCard";
import { Reveal, StaggerGroup } from "../ui/MotionReveal";

interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  mobileImageSrc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01 / 05",
    category: "Next.js · React · Laravel · MySQL",
    title: "Full-Stack Web Applications",
    description: (
      <>
        Building scalable, high-performance web applications with{" "}
        <span className="text-white">Next.js, React, Laravel, and MySQL</span> database architectures.
      </>
    ),
    imageSrc: "/assets/website.jfif",
    mobileImageSrc: "/assets/website.jfif",
    icon: MonitorSmartphone,
  },
  {
    id: "app-dev",
    number: "02 / 05",
    category: "Lunar PHP · Filament PHP · Laravel · WooCommerce",
    title: "Headless E-Commerce & Admin Dashboards",
    description: (
      <>
        Developing bespoke e-commerce storefronts and custom back-office dashboards using{" "}
        <span className="text-white">Lunar PHP and Filament PHP.</span>
      </>
    ),
    imageSrc: "/assets/Ecommerce.jfif",
    mobileImageSrc: "/assets/Ecommerce.jfif",
    icon: Smartphone,
  },
  {
    id: "systems-dev",
    number: "03 / 05",
    category: "WordPress · Elementor Pro · Tailwind CSS · PHP",
    title: "CMS Development & WordPress Solutions",
    description: (
      <>
        Crafting custom themes, template kits, and dynamic web components using{" "}
        <span className="text-white">WordPress, Elementor Pro, and Tailwind CSS.</span>
      </>
    ),
    imageSrc: "/assets/wordpress.jfif",
    mobileImageSrc: "/assets/wordpress.jfif",
    icon: Server,
  },
  {
    id: "it-consulting",
    number: "04 / 05",
    category: "LTR/RTL · Tailwind CSS · WooCommerce · Translation",
    title: "Bidirectional Theme Localization (LTR ↔ RTL)",
    description: (
      <>
        Adapting and converting LTR web layouts into full RTL frameworks (e.g., Persian/Arabic) across{" "}
        <span className="text-white">Tailwind, WordPress, and WooCommerce.</span>
      </>
    ),
    imageSrc: "/assets/location.png",
    mobileImageSrc: "/assets/location.png",
    icon: Lightbulb,
  },
  {
    id: "seo-optimization",
    number: "05 / 05",
    category: "SEO Optimization · Google Analytics",
    title: "Search Engine Optimization",
    description: (
      <>
        Optimizing websites for search engines and analyzing performance with Google Analytics.
      </>
    ),
    imageSrc: "/assets/seo.jfif",
    mobileImageSrc: "/assets/seo.jfif",
    icon: Lightbulb,
  },
];

const glassBtn =
  "inline-flex items-center justify-center rounded-full border border-white/45 bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-xl";

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(checkScroll) : null;
    ro?.observe(el);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      ro?.disconnect();
    };
  }, [checkScroll]);

  // Scroll exactly one card (width + gap) at a time
  const handleScroll = useCallback((direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;

    el.scrollBy({
      left: (direction === "right" ? 1 : -1) * step,
      behavior: "smooth",
    });
  }, []);

  const handleTrackKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleScroll("right");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleScroll("left");
    }
  };

  const toggleCard = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-[1900px]  relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12"
    >
      <div>
        {/* Header Content */}
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Digital services for every stage of your project
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            From full-stack applications and headless e-commerce to WordPress solutions, RTL localization, and Python automation.
          </p>
        </Reveal>

        {/* Controls (desktop only) - in normal flow, above the track */}
        <div
          className="relative z-20 mt-12 hidden items-center justify-end gap-2 px-6 md:flex"
          role="group"
          aria-label="Service carousel controls"
        >
          {[
            { dir: "left" as const, label: "Previous service", Icon: ArrowLeft, enabled: canScrollLeft },
            { dir: "right" as const, label: "Next service", Icon: ArrowRight, enabled: canScrollRight },
          ].map(({ dir, label, Icon, enabled }) => (
            <button
              key={dir}
              type="button"
              disabled={!enabled}
              onClick={() => handleScroll(dir)}
              aria-label={label}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white/60 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-[transform,background-color,opacity] duration-200 hover:-translate-y-0.5 hover:bg-white/80 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            >
              <Icon className="h-4 w-4 stroke-[2.2]" />
            </button>
          ))}
        </div>

        {/* Scrollable Track */}
        <div className="relative mt-4 md:mt-4">
          <StaggerGroup
            ref={scrollContainerRef}
            tabIndex={0}
            role="region"
            aria-label="Services"
            onKeyDown={handleTrackKeyDown}
            className="core-services-scroll -my-16 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[15px] py-16 outline-none sm:gap-5 lg:-my-28 lg:py-28 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingLeft: 15 }}
          >
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              const isOpen = activeId === service.id;

              return (
                <InteractiveCard
                  key={service.id}
                  variants={{
                    hidden: {
                      opacity: prefersReducedMotion ? 1 : 0,
                      y: prefersReducedMotion ? 0 : 22,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: prefersReducedMotion ? 0 : 0.55,
                      },
                    },
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleCard(service.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(service.id);
                    }
                  }}
                  className="group/service w-[calc(100vw-40px)] max-w-[360px] shrink-0 cursor-pointer snap-start rounded-[22px] outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 sm:w-[380px] sm:max-w-none lg:w-[min(46vw,620px)] lg:rounded-[28px]"
                >
                  <div className="relative block aspect-[4/3] overflow-hidden rounded-[22px] bg-neutral-950 text-left lg:rounded-[28px]">
                    <picture>
                      <source media="(max-width: 767px)" srcSet={service.mobileImageSrc} />
                      <img
                        src={service.imageSrc}
                        alt={service.title}
                        width={1232}
                        height={928}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className={`absolute inset-0 h-full w-full transform-gpu object-cover object-center transition-transform duration-700 ease-out group-hover/service:scale-[1.045] group-focus-visible/service:scale-[1.045] ${
                          isOpen ? "scale-[1.045]" : ""
                        }`}
                      />
                    </picture>

                    {/* Blur overlay */}
                    <div
                      className={`pointer-events-none absolute inset-0 backdrop-blur-[8px] transition-all duration-500 ease-out group-hover/service:bg-black/15 group-hover/service:opacity-100 group-hover/service:backdrop-blur-[12px] ${
                        isOpen ? "bg-black/15 opacity-100 backdrop-blur-[12px]" : "bg-black/10 opacity-85"
                      }`}
                      style={{
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.12) 24%, black 64%, rgba(0, 0, 0, 0.35) 88%, transparent 100%)",
                        maskImage:
                          "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.12) 24%, black 64%, rgba(0, 0, 0, 0.35) 88%, transparent 100%)",
                      }}
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.64) 30%, rgba(0, 0, 0, 0.18) 64%, transparent 84%)",
                      }}
                    />

                    {/* Card Header */}
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 text-white sm:p-5 lg:p-7">
                      <div
                        className={`${glassBtn} h-10 w-10 transition-transform duration-300 group-hover/service:scale-110 lg:h-12 lg:w-12 ${
                          isOpen ? "scale-110" : ""
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="inline-flex min-h-8 items-center rounded-full border border-white/40 bg-white/15 px-3 font-mono text-[10px] tracking-[0.18em] text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:min-h-9 lg:px-4 lg:text-xs lg:tracking-[0.22em]">
                        {service.number}
                      </span>
                    </div>

                    {/* Card Footer */}
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5 lg:p-7 xl:p-9">
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 lg:mb-3 lg:text-[11px] lg:tracking-[0.24em]">
                        {service.category}
                      </p>
                      <h3 className="flex min-w-0 items-end justify-between gap-3 font-display text-2xl font-bold tracking-tight !text-white sm:text-3xl xl:text-4xl">
                        <span className="min-w-0 break-words">{service.title}</span>
                      </h3>

                      {/* Expandable description */}
                      <div
                        className={`grid transition-all duration-300 ease-out group-hover/service:mt-3 group-hover/service:grid-rows-[1fr] group-hover/service:opacity-100 group-focus-visible/service:mt-3 group-focus-visible/service:grid-rows-[1fr] group-focus-visible/service:opacity-100 lg:group-hover/service:mt-4 ${
                          isOpen ? "mt-3 grid-rows-[1fr] opacity-100 lg:mt-4" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex items-end justify-between gap-4 py-1">
                            <p className="max-w-lg flex-1 text-sm leading-relaxed text-white/85 xl:text-base">
                              {service.description}
                            </p>
                            <span
                              className={`${glassBtn} h-11 w-11 shrink-0 transition-transform duration-300 group-hover/service:rotate-[-35deg] lg:h-12 lg:w-12 ${
                                isOpen ? "rotate-[-35deg]" : ""
                              }`}
                            >
                              <ArrowRight className="block h-5 w-5 shrink-0 stroke-[2.3]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}