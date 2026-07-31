import { useSiteContent } from "../../context/site-content-context";

const codeSkills = ["HTML", "CSS", "JavaScript", "React"];

function HeroImage() {
  const { about } = useSiteContent();
  const firstName = (about.name || "").split(" ")[0];

  return (
    <div className="flex justify-center desktop:justify-end py- desktop:py-0">
      <div className="relative flex justify-center h-[320px] desktop:h-[460px]">
        <img
          className="relative w-[500px] h-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_70%,transparent_90%)]"
          src={about.image}
          alt={about.name}
        />

        <span className="absolute hidden desktop:block -left-3 bottom-8 desktop:left-0 desktop:bottom-14 text-white/60">
          <svg
            width="44"
            height="56"
            viewBox="0 0 56 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 66C-2 50 4 34 20 30C34 26 40 38 30 44C22 48 14 42 18 32C24 18 40 10 50 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M40 4L50 6L46 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="absolute hidden desktop:block -right-2 desktop:-right-16 desktop:bottom-24 w-[190px] desktop:w-[240px] rounded-2xl bg-surface-card border border-surface-border p-3 desktop:p-5 animate-float">
          <div className="flex items-center justify-between border-b border-surface-border pb-2 mb-2">
            <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
              script.js
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div className="font-mono text-[10px] leading-relaxed text-text-secondary">
            <div>
              <span className="text-sky-300">const</span> developer = {"{"}
            </div>
            <div className="pl-3">
              name:{" "}
              <span className="text-orange-300">&quot;{firstName}&quot;</span>,
            </div>
            <div className="pl-3">
              skills: [
              {codeSkills.map((skill, index) => (
                <span key={skill}>
                  <span className="text-orange-300">&quot;{skill}&quot;</span>
                  {index < codeSkills.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </div>
            <div>{"}"};</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
