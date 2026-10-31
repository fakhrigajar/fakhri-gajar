import { about, skills } from "../../data/constants";

const codeSkills = ["HTML", "CSS", "JavaScript", "React"];

const findSkillImage = (label) =>
  skills.find((skill) => skill.label === label)?.image;

const floatingBadges = [
  {
    image: findSkillImage("React JS"),
    position: "left-[3%] top-[14%]",
    delay: "0s",
  },
  {
    image: findSkillImage("Tailwind CSS"),
    position: "right-[2%] top-[4%]",
    delay: "1.4s",
  },
  {
    image: findSkillImage("Javascript"),
    position: "-left-[3%] top-[48%]",
    delay: "2.6s",
  },
].filter((badge) => badge.image);

function HeroImage() {
  const firstName = (about.name || "").split(" ")[0];

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="150"
      className="order-1 flex justify-center desktop:order-2 desktop:justify-end"
    >
      <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[400px] desktop:max-w-[470px]">
        <div
          aria-hidden="true"
          className="absolute inset-[8%] animate-pulse-glow rounded-full bg-gradient-to-br from-gold/60 via-tangerine/40 to-tertiary/40 blur-3xl"
        ></div>

        <div
          aria-hidden="true"
          className="hero-ring absolute inset-[5%] animate-spin-slow rounded-full"
        ></div>

        <div
          aria-hidden="true"
          className="absolute inset-[10%] rounded-full border border-white/10 bg-gradient-to-b from-gold via-gold/80 to-tangerine/80 dark:from-gold/45 dark:via-gold/15 dark:to-surface-card"
        ></div>

        <img
          className="portrait-mask relative z-[1] h-full w-full object-contain"
          src={about.image}
          alt={about.name}
        />

        {floatingBadges.map((badge) => (
          <span
            key={badge.position}
            aria-hidden="true"
            style={{ animationDelay: badge.delay }}
            className={`absolute z-[2] hidden h-14 w-14 animate-float-slow items-center justify-center rounded-2xl border border-surface-border bg-surface-card/80 shadow-card backdrop-blur-xl sm:flex ${badge.position}`}
          >
            <img src={badge.image} alt="" className="h-8 w-8 object-contain" />
          </span>
        ))}

        <svg
          aria-hidden="true"
          className="hero-arrow absolute -left-6 bottom-[12%] z-[2] hidden text-text-muted desktop:block"
          width="44"
          height="56"
          viewBox="0 0 56 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animate-draw"
            pathLength="1"
            d="M6 66C-2 50 4 34 20 30C34 26 40 38 30 44C22 48 14 42 18 32C24 18 40 10 50 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            className="animate-draw"
            pathLength="1"
            d="M40 4L50 6L46 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="absolute -right-2 bottom-[8%] z-[2] hidden w-[230px] animate-float rounded-2xl border border-surface-border bg-surface-card/85 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl desktop:block xl:-right-12 xl:w-[250px]">
          <div className="mb-3 flex items-center gap-1.5 border-b border-surface-border pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 font-mono text-[10px] text-text-muted">
              script.js
            </span>
          </div>
          <div className="font-mono text-[11px] leading-relaxed text-text-secondary">
            <div>
              <span className="text-primary">const</span>{" "}
              <span className="text-sky-600 dark:text-sky-300">developer</span>{" "}
              = {"{"}
            </div>
            <div className="pl-3">
              name:{" "}
              <span className="text-emerald-600 dark:text-emerald-300">
                &quot;{firstName}&quot;
              </span>
              ,
            </div>
            <div className="pl-3">
              skills: [
              {codeSkills.map((skill, index) => (
                <span key={skill}>
                  <span className="text-emerald-600 dark:text-emerald-300">
                    &quot;{skill}&quot;
                  </span>
                  {index < codeSkills.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </div>
            <div>
              {"}"};
              <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-primary"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
