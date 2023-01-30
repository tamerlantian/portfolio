import React from "react";

import { skills } from "../data/info";

const Skills = () => {
  return (
    <section>
      <div>
        <h3 className="text-2xl font-semibold text-dark dark:text-slate-200">Skills</h3>
        <div className="flex flex-wrap gap-4 mt-10">
          {skills.map((skill) => {
            return (
              <div className="bg-font text-white rounded py-1.5 px-3">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
