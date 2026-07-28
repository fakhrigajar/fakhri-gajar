import { useSiteContent } from "../../context/site-content-context";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { projects } = useSiteContent();

  return (
    <section
      id="projects"
      className="flex justify-center items-center text-white"
    >
      <div className="w-4/5 flex flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="font-semibold text-[40px]">Projects</h1>
          <p className="text-text-secondary text-lg">
            I have worked on a wide range of projects. Here are some of my
            projects.
          </p>
        </div>
        <div className="flex flex-col gap-5 desktop:gap-[50px] w-full">
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 desktop:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] desktop:gap-5">
            {projects.map((project, index) => {
              return <ProjectCard key={index} projectsList={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
