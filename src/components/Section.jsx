import React from "react";
import { SectionTitle } from "./";
import { hobbies } from "../data/info";

const Section = () => {
  return (
    <section className="pt-[100px] mx-auto">
      <SectionTitle title="Hobbies" />
      <div>
        <p className="text-slate-700 dark:text-slate-400 mx-auto max-w-4xl mt-6 text-center">
          {" "}
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {hobbies.map((hobbie) => {
          return (
            <div
              key={hobbies.title}
              className="flex flex-col justify-between shadow-xl mt-4  dark:bg-modal px-8 py-7  h-full"
            >
              <header>
                <div className="flex items-center gap-3">
                  <div className="text-xl dark:text-white">{hobbie.icon}</div>
                  <h3 className="text-xl font-bold dark:text-slate-200">
                    {hobbie.title}
                  </h3>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400 pt-3">
                    {hobbie.description}
                  </p>
                </div>
              </header>
              <footer>
                <div className="text-lg mt-5 dark:text-white">
                  <a href={hobbie.website.link} className="hover:text-font inline-block">
                    {hobbie.website.icon}
                  </a>
                </div>
              </footer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
