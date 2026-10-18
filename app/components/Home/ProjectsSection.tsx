"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import InteractiveCard from "../ui/InteractiveCard";
import { Reveal, StaggerGroup } from "../ui/MotionReveal";

interface Project {
  id: string;
  title: string;
  category: string;
  categoryType: "3d" | "ecommerce" | "saas" | "corporate";
  badge: string;
  isFeatured: boolean;
  description: string;
  image: string;
  liveUrl: string;
  caseStudyUrl: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    id: "ndis-solutions",
    title: "NDIS Solutions",
    category: "Web Design & Services",
    categoryType: "corporate",
    badge: "Client Work",
    isFeatured: true,
    description: "Administrative and support portal developed for NDIS service providers featuring responsive layouts, custom forms, and dynamic service pages.",
    image: "/assets/ndis-solution.png",
    liveUrl: "https://ndis-solutions.com/",
    caseStudyUrl: "https://ndis-solutions.com/",
    tags: ["WordPress", "Elementor Pro", "Tailwind CSS", "PHP"],
  },
  {
    id: "ethica-rcm-services",
    title: "Ethica RCM Services",
    category: "Healthcare & Corporate",
    categoryType: "corporate",
    badge: "Client Work",
    isFeatured: true,
    description: "Corporate web portal for medical billing and revenue cycle management, designed for high conversion, clean navigation, and fast performance.",
    image: "/assets/ethicaRcm.png",
    liveUrl: "https://ethicarcmservices.com/",
    caseStudyUrl: "https://ethicarcmservices.com/",
    tags: ["WordPress", "Elementor Pro", "CSS3", "SEO Optimization"],
  },
  {
    id: "nobel-healthcare-rcm",
    title: "Nobel Healthcare RCM",
    category: "Healthcare & Corporate",
    categoryType: "corporate",
    badge: "Client Work",
    isFeatured: true,
    description: "Clean, responsive medical billing platform optimized for client onboarding, service showcases, and interactive contact workflows.",
    image: "/assets/nobel-health.png",
    liveUrl: "https://nobelhealthcarercm.com/",
    caseStudyUrl: "https://nobelhealthcarercm.com/",
    tags: ["WordPress", "Elementor Pro", "PHP", "Responsive Web Design"],
  },
  {
    id: "brush-brothers",
    title: "Brush Brothers",
    category: "Business & Services",
    categoryType: "corporate",
    badge: "Client Work",
    isFeatured: true,
    description: "Modern commercial and residential painting service portal tailored for the Australian market with dynamic service catalogs and quote booking systems.",
    image: "/assets/brushbrothers.png",
    liveUrl: "https://brushbrothers.au/",
    caseStudyUrl: "https://brushbrothers.au/",
    tags: ["WordPress", "Elementor", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "biboshi-pakistan",
    title: "Biboshi Pakistan",
    category: "E-Commerce & Retail",
    categoryType: "ecommerce",
    badge: "Current Company",
    isFeatured: true,
    description: "Built for my current company — a high-conversion retail e-commerce platform equipped with custom product grids, cart management, and seamless mobile responsiveness.",
    image: "/assets/biboshi.png",
    liveUrl: "https://biboshi.pk/",
    caseStudyUrl: "https://biboshi.pk/",
    tags: ["E-Commerce", "Custom Web Solutions", "PHP", "MySQL", "WooCommerce"],
  },
];

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = projectsData;

  const scrollCarousel = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstSlide = container.firstElementChild;
    const slideWidth =
      firstSlide instanceof HTMLElement ? firstSlide.getBoundingClientRect().width : 0;
    const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
    const scrollAmount = slideWidth + gap;

    if (scrollAmount > 0) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="mx-auto w-full max-w-[1900px]  px-4 overflow-x-hidden my-12 scroll-mt-20 sm:px-6 sm:my-16 lg:px-8 lg:my-20">
      <Reveal className="mx-auto max-w-3xl text-center">

        {/* Heading */}
        <h2 className="mt-4 bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-2xl lg:text-5xl">
          Projects Showcase
        </h2>

        {/* Description */}
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Selected client work and my current company project across web services, healthcare, and e-commerce.
        </p>

      </Reveal>

      {/* Carousel Section */}
      <div className="relative mt-10 sm:mt-12">
        <div data-slot="carousel" className="relative mx-auto w-full" role="region" aria-roledescription="carousel" tabIndex={0}>
          <div data-slot="carousel-content" className="overflow-hidden">
            <StaggerGroup
              ref={scrollContainerRef}
              className="flex min-w-0 -ml-3 md:-ml-5 overflow-x-hidden overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar pb-4"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  data-slot="carousel-item"
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full pl-3 md:basis-1/2 md:pl-5 lg:basis-1/3 xl:basis-1/3 snap-start"
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
                >
                  <div className="h-full">
                    <InteractiveCard data-slot="card" className="text-card-foreground gap-6 dark:border-white/20 py-6 shadow-sm group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:bg-card/40 dark:hover:border-primary/50">
                      <div data-slot="card-content" className="flex flex-1 flex-col p-4 sm:p-5">
                        {/* Thumbnail Container */}
                        <div className="relative overflow-hidden rounded-xl border border-border/40 bg-muted/30">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label={`Open ${project.title} live website`}
                          >
                            <div className="relative z-0 h-full bg-muted/60 aspect-video w-full overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={1920}
                                height={1080}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                              />
                            </div>
                          </Link>

                          {/* Top Badges */}
                          <div className="pointer-events-none absolute inset-x-2.5 top-2.5 flex items-center justify-between gap-2">
                            <div className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-background/85 px-2.5 py-0.5 text-[11px] font-semibold text-foreground backdrop-blur-md shadow-sm dark:bg-slate-900/85">
                              {project.category}
                            </div>
                            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md ${
                              project.badge === "Featured"
                                ? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300"
                                : "border-white/10 bg-background/70 text-muted-foreground dark:bg-slate-900/70"
                            }`}>
                              {project.badge}
                            </span>
                          </div>
                        </div>

                        {/* Card Details */}
                        <div className="mt-4 flex flex-1 flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                                {project.title}
                              </h3>
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-muted-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label={`Open ${project.title} live website`}
                                title="Open live link"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </Link>
                            </div>
                            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                              {project.description}
                            </p>
                          </div>

                          {/* Tags & Case Study Link */}
                          <div className="mt-4 pt-2 border-t border-border/40">
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((tag, idx) => (
                                <span key={idx} className="rounded-md border border-border/50 bg-secondary/60 px-2 py-0.5 text-[11px] font-medium text-secondary-foreground transition-colors hover:bg-secondary">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3.5 pt-2 border-t border-border/30">
                              <Link
                                href={project.caseStudyUrl}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
                              >
                                <span>View Case Study</span>
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>

                        </div>

                      </div>
                    </InteractiveCard>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>

          {/* Mobile Navigation / Swipe Info */}
          <div className="mt-6 flex items-center justify-between sm:hidden">
            <div className="text-xs text-muted-foreground">Swipe to explore →</div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer border shadow-xs hover:bg-accent hover:text-accent-foreground size-8 rounded-full h-9 w-9 border-border bg-card"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer border shadow-xs hover:bg-accent hover:text-accent-foreground size-8 rounded-full h-9 w-9 border-border bg-card"
                aria-label="Next Slide"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:block">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer border hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -translate-y-1/2 -left-4 lg:-left-6 border-border/80 bg-background/90 hover:bg-card shadow-md backdrop-blur-sm z-10"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer border hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -translate-y-1/2 -right-4 lg:-right-6 border-border/80 bg-background/90 hover:bg-card shadow-md backdrop-blur-sm z-10"
              aria-label="Next Slide"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}