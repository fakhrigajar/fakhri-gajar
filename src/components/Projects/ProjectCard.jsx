import PropTypes from "prop-types";
import { skills as skillIcons } from "../../data/constants";

const MAX_VISIBLE_SKILLS = 4;

const SKILL_ALIASES = {
  "redux/redux toolkit": "redux",
};

const skillIconMap = skillIcons.reduce((map, skill) => {
  map[skill.label.toLowerCase()] = skill.image;
  return map;
}, {});

const getSkillIcon = (skillName) => {
  const key = skillName.toLowerCase();
  return skillIconMap[key] || skillIconMap[SKILL_ALIASES[key]] || null;
};

function ProjectCard({ projectsList }) {
  const { name, category, image, skills, links } = projectsList;
  const [liveLink, codeLink] = links;
  const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS);
  const hiddenSkills = skills.slice(MAX_VISIBLE_SKILLS);

  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col rounded-2xl border-2 border-surface-1 border-solid bg-surface-card shadow-black/20 duration-300 hover:-translate-y-1 hover:border-primary group"
    >
      <a
        href={liveLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${name} live`}
        className="group relative block aspect-video overflow-hidden rounded-t-2xl"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover duration-500 group-hover:scale-110"
        />

        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          <span className="rounded-full bg-surface-1/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-text-secondary backdrop-blur">
            {category}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-surface-1/0 opacity-0 duration-300 group-hover:bg-surface-1/50 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg">
            <i className="ri-external-link-line"></i>
            View Live
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="font-semibold leading-snug text-text-primary">{name}</h3>

        <ul className="mt-3 flex flex-wrap items-center gap-2">
          {visibleSkills.map((skill) => {
            const icon = getSkillIcon(skill);
            return (
              <li key={skill} className="group/skill relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface-1 p-1.5 duration-300 group-hover/skill:border-primary">
                  {icon ? (
                    <img
                      src={icon}
                      alt={skill}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-[11px] font-semibold text-primary">
                      {skill.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface-1 px-2 py-1 text-[11px] text-text-primary opacity-0 shadow-lg duration-200 group-hover/skill:opacity-100">
                  {skill}
                </span>
              </li>
            );
          })}

          {hiddenSkills.length > 0 && (
            <li className="group/more relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface-1 text-xs font-medium text-text-muted duration-300 group-hover/more:border-primary group-hover/more:text-primary">
                +{hiddenSkills.length}
              </div>
              <ul className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[180px] -translate-x-1/2 rounded-md bg-surface-1 p-2 text-[11px] text-text-secondary opacity-0 shadow-lg duration-200 group-hover/more:opacity-100">
                {hiddenSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>

        <a
          href={codeLink}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex border-b-2 border-solid hover:border-primary border-text-secondary w-fit items-center gap-1.5 self-end text-sm font-medium text-text-secondary duration-300 hover:text-primary"
        >
          <i className="ri-github-fill"></i>
          View Code
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  projectsList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;
