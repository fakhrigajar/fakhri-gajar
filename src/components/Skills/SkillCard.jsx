import React from "react";

function SkillCard({ skill, index }) {
  return (
    <div
      className="py-[5px] px-5 flex items-center gap-[7px] duration-300 border-2 border-solid rounded-2xl border-text-muted hover:border-primary"
      data-aos="zoom-in"
    >
      <div className="p-[5px] flex items-center justify-center">
        <img className="w-5" src={skill.image} alt={`Skill ${index}`} />
      </div>
      <p>{skill.label}</p>
    </div>
  );
}

export default SkillCard;
