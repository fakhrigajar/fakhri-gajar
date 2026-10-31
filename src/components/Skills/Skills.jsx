import { skills } from "../../data/constants";
import SkillCard from "./SkillCard";
import SectionHeading from "../Custom/SectionHeading";

const half = Math.ceil(skills.length / 2);
const skillRows = [skills.slice(0, half), skills.slice(half)];

function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading
          title="My"
          highlight="Skills"
          description="Here are some of my skills on which I have been working on for the past 2 years."
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="mx-auto mt-14 flex w-full max-w-7xl flex-col gap-4"
      >
        {skillRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="marquee-mask flex w-full overflow-hidden py-2"
          >
            {/* The track holds two copies; padding equals the gap so -50% loops seamlessly. */}
            <div
              className={`skills-track flex w-max gap-4 pr-4 will-change-transform ${
                rowIndex % 2 === 1 ? "skills-track--reverse" : ""
              }`}
            >
              {[...row, ...row].map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                  isDuplicate={index >= row.length}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
