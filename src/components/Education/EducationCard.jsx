import PropTypes from "prop-types";

function EducationCard({ educationList }) {
  const { institution, degree, date, description } = educationList;

  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface-card p-6 text-left shadow-lg shadow-black/20 duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/10"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primaryOverlay text-lg text-primary">
          <i className="ri-graduation-cap-fill"></i>
        </span>
        <span className="mt-1 shrink-0 text-xs text-text-muted">{date}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold leading-snug text-text-primary">
          {institution}
        </h3>
        <p className="text-sm text-text-secondary">{degree}</p>
      </div>

      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}

EducationCard.propTypes = {
  educationList: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default EducationCard;
