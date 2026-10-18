import { GraduationCap, Layers3, Server } from "lucide-react";

const profileDetails = [
  {
    title: "Education",
    detail: "B.S. Computer Science",
    supportingText: "Virtual University of Pakistan",
    icon: GraduationCap,
  },
  {
    title: "Core stack",
    detail:
      "Next Js, Laravel, Wordpress",
    supportingText: "Frontend, backend, e-commerce, CMS, and automation",
    icon: Layers3,
  },
  {
    title: "Deployment",
    detail: "Vercel /Hosting",
    supportingText: "cPanel / VPS, Managed MySQL Architectures",
    icon: Server,
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24 mx-auto w-full max-w-[1900px]  px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Building thoughtful software, from interface to database
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            I&apos;m Muhammad Umair, a Full-Stack Web Developer &amp; Software Engineer focused on connected, maintainable web applications.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {profileDetails.map(({ title, detail, supportingText, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 sm:p-7"
            >
              <Icon className="h-6 w-6 text-white/70" aria-hidden="true" />
              <h3 className="mt-5 text-sm font-medium text-white/55">{title}</h3>
              <p className="mt-2 break-words text-lg font-semibold leading-snug text-white">
                {detail}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {supportingText}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}