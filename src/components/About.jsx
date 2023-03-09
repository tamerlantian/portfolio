import React from "react";
import { Link } from "react-router-dom"
import { AiOutlineCloudDownload } from "react-icons/ai";

const About = () => {
  return (
    <section className="mx-auto">
      <h3 className="text-2xl dark:text-slate-200 font-semibold text-black">
        Get to know me!
      </h3>
      <div className="mt-10 text-slate-700 dark:text-slate-400">
        <div>
          <p>
            Hello! My name is Sebastian, and I'm a self-taught developer who's
            passionate about coding and eager to learn more.
          </p>
          <br />
          <p>
            Although I don't have any professional experience yet, I've spent
            countless hours studying programming languages, frameworks, and
            tools on my own. I've completed online courses, participated in
            coding challenges, and worked on personal projects to hone my skills
            and deepen my knowledge.
          </p>
          <br />
          <p>
            As a self-taught developer, I've learned the importance of being
            self-motivated, disciplined, and persistent. I've encountered many
            challenges along the way, but I've persevered through them all, and
            I've gained a strong sense of resilience and determination.
          </p>
        </div>
        <div className="mt-16">
          <Link to="/pdf" className="rounded-xl bg-gray-600 text-white py-3 px-5">
            Download CV
            <AiOutlineCloudDownload className="inline text-xl ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
