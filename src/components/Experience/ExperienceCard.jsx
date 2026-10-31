import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { formatDateRange } from "../../lib/dateRange";

function ExperienceCard({ experienceList }) {
  const { image, company, position, date, skills = [] } = experienceList;
  const isOngoing = typeof date === "object" && date?.ongoing;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={
        <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-card/80 px-3 py-1 font-mono text-xs backdrop-blur">
          <i aria-hidden="true" className="ri-calendar-line text-primary"></i>
          {formatDateRange(date)}
        </span>
      }
      icon={
        <img
          className="h-full w-full rounded-full object-cover"
          src={image}
          alt={company}
        />
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-text-primary desktop:text-xl">
              {company}
            </h3>
            <span className="text-sm font-medium text-primary">{position}</span>
          </div>
          {isOngoing && (
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="live-dot"></span>
              Current
            </span>
          )}
        </div>

        {skills.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                className="rounded-full border border-primary/15 bg-primaryOverlay px-2.5 py-1 text-xs font-medium text-primary"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
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
