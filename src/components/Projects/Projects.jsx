import { projects } from "../../data/constants";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../Custom/SectionHeading";

function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading
          title="Featured"
          highlight="Projects"
          description="I have worked on a wide range of projects. Here are some of my projects."
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 desktop:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} projectsList={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
