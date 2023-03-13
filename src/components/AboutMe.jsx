import React from "react";
import { SectionTitle, About, Skills } from ".";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <SectionTitle title="About me" />
      <div>
        <p className="text-slate-700 dark:text-slate-400 mx-auto max-w-4xl mt-6 text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="grid md:grid-cols-2  md:px-16 xl:px-28 gap-8 mt-16">
        <About />
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
