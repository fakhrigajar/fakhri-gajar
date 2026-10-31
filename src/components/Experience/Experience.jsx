import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";

import "react-vertical-timeline-component/style.min.css";

import { VerticalTimeline } from "react-vertical-timeline-component";

function Experience() {
  return (
    <section id="experience" className="overflow-hidden flex justify-center">
      <div className="w-4/5 flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-[10px] items-center">
          <h1 className="font-semibold text-[40px] text-white">My Journey</h1>
          <p className="text-text-secondary text-lg text-center">
            Here&apos;s a timeline of my professional experience and the
            milestones along my journey so far.
          </p>
        </div>

        <VerticalTimeline>
          <div>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experienceList={experience}
              />
            ))}
          </div>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
