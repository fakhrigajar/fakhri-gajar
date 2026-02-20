import React from "react";
import { skills } from "../../data/constants";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="flex justify-center bg-surface-1 items-center text-text-primary duration-300"
    >
      <div className="w-4/5 flex flex-col justify-center items-center text-center gap-[50px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-semibold text-[40px]">Skills</h1>
          <p className="text-text-secondary text-lg">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-[10px] justify-center">
          {skills.map((skill, index) => {
            return <SkillCard key={index} skill={skill} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
