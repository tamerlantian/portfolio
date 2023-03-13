import React from "react";
import { SectionTitle, HobbiesCard } from ".";
import { hobbies } from "../data/info";

const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies">
      <SectionTitle title="Hobbies" />
      <div>
        <p className="text-slate-700 dark:text-slate-400 mx-auto max-w-4xl mt-6 text-center">
          A bit of what I like to do in my free time related with programming.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 justify-items-center md:grid-cols-3 mt-16 mx-auto max-w-[64rem] gap-8 ">
        {hobbies.map((hobbie) => {
          return <HobbiesCard key={hobbie.title} hobbie={hobbie} />;
        })}
      </div>
    </section>
  );
};

export default Hobbies;
