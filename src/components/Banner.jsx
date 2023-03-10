import React from "react";

const Banner = () => {
  return (
    <section className="flex justify-center items-center flex-col h-full">
      <div>
        <div className="delay-100">
        <span className="text-font font-alt dark:text-darkFont">Hi, my name is</span>
        </div>
        <div className="delay-200">
          <h2 className="text-dark font-bold mt-4 md:mt-10 hero-header leading-9 dark:text-white">
            Sebastian Hoyos
          </h2>
        </div>
        <div className="delay-300">
        <h3 className="text-slate-600 font-bold hero-header leading-9 mt-2 sm:mt-10 dark:text-slate-400">
          Frontend Developer
        </h3>
        </div>
        <div className="delay-400">
          <p className="block text-slate-700 mt-5 md:mt-10 max-w-xl dark:text-slate-400">
            I'm a self-thaught Frontend developer.
            Currently, I'm part of an ambassador program at Wilco which is a company aimed for developers who wants to upskilling their habilities.
          </p>
        </div>
        <a href="#projects" className="inline-block bg-font text-white border rounded-sm border-font py-3 px-10 mt-10 md:text-font md:bg-transparent hover:bg-font hover:text-white hover:-translate-y-1 hover:ease-in-out hover:duration-300 ease-in-out duration-300 dark:border-font">Projects</a>
      </div>
    </section>
  );
};

export default Banner;
