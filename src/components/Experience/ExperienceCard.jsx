import { useState } from "react";
import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { formatDateRange } from "../../lib/dateRange";

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
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        background: "#1c1c27",
        color: "#fff",
        borderBottom: "4px solid #854ce6",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #854ce6" }}
      date={formatDateRange(experienceList.date)}
      iconStyle={{ background: "#854ce6", color: "#fff" }}
      icon={
        <img
          className="rounded-full"
          src={experienceList.image}
          alt={experienceList.company}
        />
      }
    >
      <div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-text-primary">
            {experienceList.company}
          </h1>
          <h3 className="text-text-secondary text-xs desktop:text-sm">
            {experienceList.position}
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-text-muted">
            {readMoreActive.index === id && readMoreActive.boolean
              ? experienceList.description
              : firstPartOfDescription}
            {firstPart !== null ? (
              <span
                className="text-white pl-[5px] font-medium cursor-pointer"
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
          <ul className="flex flex-wrap gap-2">
            {experienceList.skills?.length > 0 ? (
              <>
                <h1>Skills:</h1>
                {experienceList.skills.map((experience, index) => (
                  <li
                    className="px-2 py-1 text-xs h-fit bg-primaryOverlay rounded-xl text-primary"
                    key={index}
                  >
                    {experience}
                  </li>
                ))}
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

ExperienceCard.propTypes = {
  id: PropTypes.number.isRequired,
  experienceList: PropTypes.shape({
    image: PropTypes.string,
    company: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
        ongoing: PropTypes.bool,
      }),
    ]),
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  readMoreActive: PropTypes.shape({
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    boolean: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }).isRequired,
  setReadMoreActive: PropTypes.func.isRequired,
};

export default ExperienceCard;
