import { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  const tabs = ["All", "E-Commerce", "Web App", "Landing Page"];
  const [activeTab, setActiveTab] = useState("All");
  const [updatedProjects, setUpdatedProjects] = useState(projects);
  const [responsiveTab, setResponsiveTab] = useState(false);

  const filterCategories = (category) => {
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );
    setUpdatedProjects(filteredProjects);
  };
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
          <nav className="flex justify-center">
            <div className="flex flex-col items-center gap-2.5 w-full desktop:w-auto">
              <p
                onClick={() => setResponsiveTab(!responsiveTab)}
                className="desktop:hidden relative flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-primary bg-primaryOverlay px-5 py-2.5 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm duration-300"
              >
                {activeTab}
                <i
                  className={`ri-arrow-down-line absolute right-5 top-1/2 -translate-y-1/2 duration-300 ${
                    responsiveTab ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </p>
              <ul
                className={`flex w-full flex-col gap-2.5 overflow-hidden border-none rounded-none duration-300 desktop:visible desktop:h-auto desktop:w-auto desktop:flex-row desktop:gap-0 desktop:overflow-visible desktop:rounded-full desktop:border desktop:border-primary desktop:opacity-100 ${
                  responsiveTab
                    ? "h-[145px] opacity-100 visible"
                    : "h-0 opacity-0 invisible"
                }`}
              >
                {tabs.map((tab, index) => {
                  const isActive = tab === activeTab;
                  return (
                    <li
                      onClick={() => {
                        setActiveTab(tab);
                        filterCategories(tab);
                        setResponsiveTab(false);
                        if (tab === "All") {
                          setUpdatedProjects(projects);
                        }
                      }}
                      key={index}
                      className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-primary bg-primary px-2.5 py-2.5 text-center text-white duration-300 hover:bg-transparent hover:text-primary desktop:w-auto desktop:rounded-none desktop:border-l-0 desktop:border-r desktop:bg-transparent desktop:px-5 desktop:text-primary desktop:first:rounded-l-full desktop:first:border-l desktop:last:rounded-r-full desktop:last:border-r-0 desktop:hover:bg-primary desktop:hover:text-white ${
                        isActive
                          ? "hidden desktop:flex desktop:bg-primary desktop:text-white"
                          : "flex"
                      }`}
                    >
                      {tab}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 desktop:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] desktop:gap-5">
            {updatedProjects.map((project, index) => {
              return <ProjectCard key={index} projectsList={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
