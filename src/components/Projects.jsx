import React from "react";
import { projects } from "../data/info";
import { ProjectPreview, SectionTitle } from "./";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-project justify-items-center justify-center gap-8 mt-10">
        {projects.map((project) => {
          return (
            <React.Fragment key={project.name}>
              <ProjectPreview project={project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
