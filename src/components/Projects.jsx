import React from "react";
import { projects } from "../data/info";
import { ProjectPreview, SectionTitle } from "./";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-20">
      <SectionTitle title="Projects" />
      <div className="grid lg:grid-cols-2">
        {projects.map((project) => {
          return <ProjectPreview key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
