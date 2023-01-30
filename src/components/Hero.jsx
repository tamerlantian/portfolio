import React from "react";

const Hero = () => {
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
          <p className="text-slate-700 mt-5 md:mt-10 max-w-xl dark:text-slate-400">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building accessible, human-centered products at Upstatement.
          </p>
        </div>
        <button className="border border-darkFont py-3 px-10 mt-10 text-font hover:rounded-md hover:bg-font hover:text-white hover:-translate-y-3 hover:ease-in-out hover:duration-300 ease-in-out duration-300 dark:border-font">
          Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
