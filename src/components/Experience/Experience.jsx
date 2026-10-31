import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "../Custom/SectionHeading";

import "react-vertical-timeline-component/style.min.css";

import { VerticalTimeline } from "react-vertical-timeline-component";

function Experience() {
  return (
    <section id="experience" className="overflow-hidden">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading
          title="My"
          highlight="Journey"
          description="Here's a timeline of my professional experience and the milestones along my journey so far."
        />

        <VerticalTimeline className="journey-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experienceList={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
