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

function ProjectCard({ projectsList, index }) {
  const { name, category, image, skills, links } = projectsList;
  const [liveLink, sourceLink] = links;
  const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS);
  const hiddenSkills = skills.slice(MAX_VISIBLE_SKILLS);

  return (
    <div data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
      <article className="card card-hover group flex h-full flex-col">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${name} live`}
          className="relative m-2 mb-0 block aspect-[2/1] overflow-hidden rounded-2xl bg-surface-1"
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {category}
          </span>
          <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/45 px-2 py-0.5 font-mono text-[11px] font-medium text-white/90 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#141222] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <i aria-hidden="true" className="ri-external-link-line"></i>
            View Live
          </span>
        </a>

        <div className="relative flex flex-1 flex-col gap-5 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug text-text-primary">
              {name}
            </h3>
            <div className="flex shrink-0 gap-2">
              {sourceLink && (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} source code`}
                  className="icon-btn h-9 w-9 text-base"
                >
                  <i aria-hidden="true" className="ri-github-line"></i>
                </a>
              )}
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${name}`}
                className="icon-btn h-9 w-9 text-base"
              >
                <i aria-hidden="true" className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>

          <ul className="mt-auto flex flex-wrap items-center gap-2">
            {visibleSkills.map((skill) => {
              const icon = getSkillIcon(skill);
              return (
                <li key={skill} className="group/skill relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface-1 p-1.5 transition-all duration-300 group-hover/skill:-translate-y-0.5 group-hover/skill:border-primary">
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
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-surface-border bg-surface-elevated px-2 py-1 text-[11px] text-text-primary opacity-0 shadow-lg transition-opacity duration-200 group-hover/skill:opacity-100">
                    {skill}
                  </span>
                </li>
              );
            })}

            {hiddenSkills.length > 0 && (
              <li className="group/more relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface-1 text-xs font-medium text-text-muted transition-colors duration-300 group-hover/more:border-primary group-hover/more:text-primary">
                  +{hiddenSkills.length}
                </div>
                <ul className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[180px] -translate-x-1/2 rounded-md border border-surface-border bg-surface-elevated p-2 text-[11px] text-text-secondary opacity-0 shadow-lg transition-opacity duration-200 group-hover/more:opacity-100">
                  {hiddenSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </article>
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
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
