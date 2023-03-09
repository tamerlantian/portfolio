import React from "react";
import { SectionTitle, HobbiesCard } from "./";
import { hobbies } from "../data/info";

const Section = () => {
  return (
    <section id="hobbies" className="pt-[100px] mx-auto">
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
          return <HobbiesCard key={hobbie.title} hobbie={hobbie} />;
        })}
      </div>
    </section>
  );
};

export default Section;
