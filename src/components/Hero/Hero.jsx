import HeroImage from "./HeroImage";
import { Typewriter } from "react-simple-typewriter";
import {
  about,
  certificates,
  projects,
  skills,
  socials,
} from "../../data/constants";
import GridPattern from "../Custom/GridPattern";
import CountUp from "../Custom/CountUp";
import { cn } from "../../lib/utils";

const stats = [
  { label: "Projects built", value: projects.length },
  { label: "Certificates", value: certificates.length },
  { label: "Technologies", value: skills.length },
];

const gridSquares = [
  [4, 6],
  [9, 9],
  [13, 4],
  [16, 13],
  [20, 8],
  [24, 15],
  [11, 17],
  [27, 10],
  [7, 14],
  [22, 19],
  [18, 3],
  [30, 6],
];

function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 desktop:pb-24 desktop:pt-36"
    >
      <GridPattern
        width={48}
        height={48}
        squares={gridSquares}
        className={cn(
          "grid-twinkle fill-primary/[0.16] stroke-text-primary/[0.07]",
          "[mask-image:radial-gradient(720px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12",
        )}
      />

      <div className="container-page relative grid items-center gap-12 desktop:grid-cols-[1.15fr_0.85fr] desktop:gap-6">
        <div className="order-2 flex flex-col items-center text-center desktop:order-1 desktop:items-start desktop:text-left">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col gap-1"
          >
            <span className="text-2xl font-medium text-text-secondary sm:text-3xl">
              Hi, I am
            </span>
            <span className="text-gradient animate-gradient-x pb-2 text-5xl font-bold leading-[1.05] sm:text-6xl desktop:text-7xl">
              {about.name}
            </span>
          </h1>

          {about.roles?.length > 0 && (
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-3 flex min-h-[2.5rem] items-center gap-2 font-display text-xl font-semibold text-text-secondary sm:text-2xl desktop:text-[28px]"
            >
              I am a
              <span className="text-primary">
                <Typewriter words={about.roles} loop={0} cursor />
              </span>
            </div>
          )}

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {about.description}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-9 flex flex-wrap items-center justify-center gap-3 desktop:justify-start"
          >
            <a
              className="btn btn-primary no-underline"
              target="_blank"
              rel="noreferrer"
              href={about.resume}
            >
              Check Resume
              <i
                aria-hidden="true"
                className="ri-arrow-right-up-line text-base"
              ></i>
            </a>
            <a className="btn btn-ghost no-underline" href="#contact">
              Contact me
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.value}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="icon-btn"
                >
                  <i aria-hidden="true" className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <dl
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-10 grid w-full max-w-lg grid-cols-3 divide-x divide-surface-border border-t border-surface-border pt-8"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 px-2 desktop:items-start desktop:px-6 desktop:first:pl-0"
              >
                <dt className="order-2 text-xs text-text-muted sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-bold text-text-primary sm:text-4xl">
                  <CountUp end={stat.value} />
                  {stat.label == "Projects built" ? "+" : ""}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroImage />
      </div>

      <a
        href="#skills"
        aria-label="Scroll to skills"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted no-underline transition-colors hover:text-primary desktop:tall:flex"
      >
        <span className="flex h-9 w-[22px] justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-2 w-1 animate-scroll-wheel rounded-full bg-current"></span>
        </span>
        Scroll
      </a>
    </section>
  );
}

export default Hero;
