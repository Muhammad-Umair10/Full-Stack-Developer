const technologies = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React.js", slug: "react" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Elementor", slug: "elementor" },
  { name: "Laravel", slug: "laravel" },
  { name: "Lunar PHP", slug: "php" },
  { name: "Filament", slug: "filament" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "Python", slug: "python" },
  { name: "Vercel", slug: "vercel" },
  { name: "InfinityFree", slug: "infinityfree" },
];

export default function TechnologiesMarquee() {
  return (
    <div
      id="technologies"
      role="region"
      aria-label="Technology stack and hosting"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden border-y border-white/5 py-6 sm:py-8"
    >
      <div className="group w-full overflow-hidden [--duration:30s]">
        <div
          className="flex w-max animate-marquee flex-row group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "var(--duration)" }}
        >
          {[0, 1].map((trackIndex) => (
            <div
              key={trackIndex}
              aria-hidden={trackIndex === 1}
              className="flex shrink-0 flex-row gap-3 px-1.5 sm:gap-5 sm:px-2.5"
            >
              {technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="flex min-h-11 shrink-0 items-center justify-cente hover:text-white sm:min-h-12 sm:px-6 sm:text-sm"
                  title={technology.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${technology.slug}/FFFFFF`}
                    alt={technology.name}
                    width="48"
                    height="48"
                    loading="lazy"
                    className="h-14 w-14 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
