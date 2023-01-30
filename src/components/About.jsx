import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { skills } from "../data/info";

const About = () => {
  return (
    <section className="mx-auto">
      <h3 className="text-2xl dark:text-slate-200 font-semibold text-black">Get to know me!</h3>
      <div className="mt-10 text-slate-700 dark:text-slate-400">
        <div>
          <p>
            Hello! My name is Sebastian and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <br />
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
        </div>
        {/* // <ul className="grid grid-cols-2 w-96  mt-5">
        //   {skills.map((skill) => {
        //     return (
        //       <li key={skill} className="mb-3">
        //         <MdKeyboardArrowRight className="inline text-font" /> {skill}
        //       </li>
        //     );
        //   })}
        // </ul> */}
      </div>
    </section>
  );
};

export default About;
