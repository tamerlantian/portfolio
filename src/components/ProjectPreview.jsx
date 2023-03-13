import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectPreview = ({ project }) => {
  const {
    name,
    image,
    description,
    tools,
    finished,
    liveLink,
    githubLink,
    alt,
  } = project;

  return (
    <div className="shadow-xl p-4 rounded-lg dark:bg-modal max-w-[30rem] h-full">
      <div className="inner-project">
        <header>
          <div className="top">
            <a href={liveLink} className={`${!finished && "disabled"}`}>
              <img
                className={`relativE w-full max-w-md rounded-lg ${!finished && "grayscale -z-10"}`}
                src={image}
                alt={alt}
              />
            </a>
          </div>
          <div className="title">
            <span className="font-alt text-xs text-font">Featured Project</span>
            <h3 className="font-semibold dark:text-slate-200">
              <a href="" className={`${!finished ? "disabled" : "hover:text-font"}`}>{name}</a>
            </h3>
          </div>
          <div className="description text-md">
            <p className="text-slate-700 dark:text-slate-400 mt-3">
              {description}
            </p>
          </div>
        </header>
        <footer>
          <div className="font-alt text-xs text-slate-700 dark:text-slate-400 mt-4">
            {tools.map((tool) => {
              return (
                <span key={tool} className="mr-3">
                  {tool}
                </span>
              );
            })}
          </div>
          <div className="flex gap-4 my-3 text-slate-400">
            <a href={githubLink} className="hover:text-font">
              <FiGithub />
            </a>
            <a href={liveLink} className={`${!finished ? "disabled" : "hover:text-font"}`}>
              <FiExternalLink  />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectPreview;
