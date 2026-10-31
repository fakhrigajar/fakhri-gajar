import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { formatDateRange } from "../../lib/dateRange";

function ExperienceCard({ experienceList }) {
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-text-primary">
            {experienceList.company}
          </h1>
          <h3 className="text-text-secondary text-xs desktop:text-sm">
            {experienceList.position}
          </h3>
        </div>
        {experienceList.skills?.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-sm text-text-secondary">Skills:</span>
            <ul className="flex flex-wrap gap-2">
              {experienceList.skills.map((skill) => (
                <li
                  className="px-2 py-1 text-xs leading-5 bg-primaryOverlay rounded-xl text-primary"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
}

ExperienceCard.propTypes = {
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
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ExperienceCard;
