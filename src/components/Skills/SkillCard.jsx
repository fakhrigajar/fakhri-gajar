import React from "react";

function SkillCard({ skill, index }) {
  return (
    <div className="skill__row" data-aos="zoom-in">
      <div className="skill__icon">
        <img src={skill.image} alt={`Skill ${index}`} />
      </div>
      <p>{skill.label}</p>
    </div>
  );
}

export default SkillCard;
