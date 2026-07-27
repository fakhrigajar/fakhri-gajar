import PropTypes from "prop-types";

function SkillCard({ skill, index }) {
  return (
    <div className="w-20 h-30 p-3 flex-shrink-0 group box-content flex flex-col justify-center items-center gap-[7px] duration-300 border-2 border-solid rounded-xl border-text-muted hover:border-primary">
      <div className="h-11 flex items-center">
        <img
          className="w-11 opacity-55 grayscale-[1] group-hover:grayscale-0 group-hover:opacity-100 duration-200"
          src={skill.image}
          alt={`Skill ${index}`}
        />
      </div>

      <p className="text-text-secondary text-[11px]">{skill.label}</p>
    </div>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillCard;
