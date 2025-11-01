import React, { useState } from "react";

function ExperienceCard({
  id,
  experienceList,
  readMoreActive,
  setReadMoreActive,
}) {
  const [activeCard, setActiveCard] = useState(1);

  let firstPartOfDescription = "";
  let firstPart = null;
  const settingFirstPartOfText = (text) => {
    let result;
    const words = text.split(" ");
    result = text;
    if (words.length > 30) {
      firstPart = words.slice(0, 30);
      result = firstPart.join(" ");
    }
    firstPartOfDescription = result;
  };
  settingFirstPartOfText(experienceList.description);

  return (
    <div className="experience__card" data-aos="fade-up">
      <div className="experience__card-left">
        <span></span>
        <span></span>
      </div>
      <div className="experience__card-right">
        <div className="experience__card-top">
          <img src={experienceList.image} alt="" />
          <div className="experience__card-title">
            <h1>{experienceList.position}</h1>
            <h2>{experienceList.company}</h2>
            <p>{experienceList.date}</p>
          </div>
        </div>
        <div className="experience__card-bottom">
          <div
            className={`experience__card-content ${
              readMoreActive ? "read-more-active" : ""
            }`}
          >
            <p>
              {readMoreActive.index === id && readMoreActive.boolean
                ? experienceList.description
                : firstPartOfDescription}
              {firstPart !== null ? (
                <span
                  onClick={() => {
                    setActiveCard(!activeCard);
                    setReadMoreActive({
                      ...readMoreActive,
                      index: id,
                      boolean: activeCard,
                    });
                  }}
                >
                  {readMoreActive.index === id && readMoreActive.boolean
                    ? "show less..."
                    : "read more..."}
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          {experienceList.skills ? (
            <div className="experience__card-skills">
              <p>Skills:</p>
              <ul>
                {experienceList.skills?.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
