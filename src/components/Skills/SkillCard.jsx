import PropTypes from "prop-types";

function SkillCard({ skill, isDuplicate = false }) {
  return (
    <div
      aria-hidden={isDuplicate || undefined}
      className="group flex w-28 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-surface-border bg-surface-card/80 px-3 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
    >
      <div className="flex h-12 items-center">
        <img
          className="max-h-11 w-11 object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 "
          src={skill.image}
          alt=""
          loading="lazy"
        />
      </div>

      <p className="text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary">
        {skill.label}
      </p>
    </div>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isDuplicate: PropTypes.bool,
};

export default SkillCard;
