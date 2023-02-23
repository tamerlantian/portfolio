import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectPreview = ({ project }) => {
  const { name, image, description, tools } = project;
  return (
    <div className="mt-10 shadow-xl p-4 rounded-lg dark:bg-modal max-w-[30rem] mx-auto">
      <div>
        <a href="">
          <img
            className="w-full max-w-md h-full rounded-lg"
            src={image}
            alt=""
          />
        </a>
      </div>
      <div className="mt-4">
        <span className="font-alt text-xs text-font">Featured Project</span>
        <h3 className="font-semibold dark:text-slate-200 hover:text-font">
          <a href="">{name}</a>
        </h3>
        <p className="text-slate-700 dark:text-slate-400 mt-3">
          {description}
        </p>
        <div className="font-alt text-xs text-slate-700 dark:text-slate-400 mt-4">
        {tools.map((tool) => {
            return <span key={tool} className="mr-3">{tool}</span>;
          })}
        </div>
        <div className="flex gap-4 my-3 text-slate-400">
          <a href="">
            <FiGithub className="hover:text-font" />
          </a>
          <a href="">
            <FiExternalLink className="hover:text-font" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
