import PropTypes from "prop-types";
import { formatDateRange } from "../../lib/dateRange";

function EducationCard({ educationList }) {
  const { institution, degree, date } = educationList;

  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface-card p-6 text-left shadow-lg shadow-black/20 duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/10"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primaryOverlay text-lg text-primary">
          <i className="ri-graduation-cap-fill"></i>
        </span>
        <span className="mt-1 shrink-0 text-xs text-text-muted">
          {formatDateRange(date)}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold leading-snug text-text-primary">
          {institution}
        </h3>
        <p className="text-sm text-text-secondary">{degree}</p>
      </div>
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
};

export default EducationCard;
