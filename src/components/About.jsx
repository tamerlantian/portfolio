import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai"

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
        <div className="mt-16">
          <a className="rounded-xl bg-gray-600 text-white py-3 px-5">
            Download CV
            <AiOutlineCloudDownload className="inline text-xl ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
