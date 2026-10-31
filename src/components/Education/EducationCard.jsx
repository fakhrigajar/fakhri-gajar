import PropTypes from "prop-types";
import { formatDateRange } from "../../lib/dateRange";

function EducationCard({ educationList, index }) {
  const { institution, degree = "", date } = educationList;
  const [level, field] = degree.includes(" / ")
    ? degree.split(" / ")
    : [null, degree];
  const isOngoing = typeof date === "object" && date?.ongoing;

  return (
    <div data-aos="fade-up" data-aos-delay={index * 120}>
      <article className="card card-hover group flex h-full flex-col gap-6 overflow-hidden p-7 text-left">
        <i
          aria-hidden="true"
          className="ri-graduation-cap-line pointer-events-none absolute -right-6 -top-8 text-[150px] leading-none text-primary/[0.06] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110"
        ></i>

        <div className="relative flex items-center justify-between gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-xl text-onBrand shadow-lg shadow-tangerine/30 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
            <i aria-hidden="true" className="ri-graduation-cap-fill"></i>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-1/80 px-3 py-1 font-mono text-[11px] text-text-secondary">
            <i aria-hidden="true" className="ri-calendar-line"></i>
            {formatDateRange(date)}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col gap-2">
          {level && (
            <span className="w-fit rounded-full bg-primaryOverlay px-3 py-1 text-xs font-semibold text-primary">
              {level}
            </span>
          )}
          <h3 className="text-xl font-semibold leading-snug text-text-primary">
            {institution}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">{field}</p>
        </div>

        {isOngoing && (
          <span className="relative inline-flex w-fit items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="live-dot"></span>
            Currently studying
          </span>
        )}
      </article>
    </div>
  );
}

EducationCard.propTypes = {
  educationList: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string,
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
        ongoing: PropTypes.bool,
      }),
    ]),
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default EducationCard;
