import React from "react";

import { skills } from "../data/info";

const Skills = ({ t }) => {
  return (
    <section>
      <div>
        <h3 className="text-2xl font-semibold text-dark dark:text-slate-200">
          {t("about.skills")}
        </h3>
        <div className="flex flex-wrap gap-4 mt-10">
          {skills.map(({ tag, icon }) => {
            return (
              <div
                key={tag}
                className="bg-font text-white rounded shadow-lg py-1.5 px-3 flex items-center gap-1.5"
              >
                <div className={`text-lg`}>{icon}</div>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
