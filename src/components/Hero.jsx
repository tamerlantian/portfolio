import React from "react";

const Hero = () => {
  return (
    <div className="container flex justify-center items-center flex-col h-full">
      <div>
        <div className="delay-100">
        <span className="text-font font-alt">Hi, my name is</span>
        </div>
        <div className="delay-200">
          <h2 className="text-white font-bold mt-8 hero-header leading-7">
            Sebastian Hoyos
          </h2>
        </div>
        <div className="delay-300">
        <h3 className="text-slate-400 font-bold hero-header">
          Frontend Developer
        </h3>
        </div>
        <div className="delay-400">
          <p className="text-slate-400 mt-5 max-w-xl">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building accessible, human-centered products at Upstatement.
          </p>
        </div>
        <button className="border border-font py-3 px-10 mt-10 text-font hover:rounded-md hover:bg-font hover:text-white hover:-translate-y-3 hover:ease-in-out hover:duration-300 ease-in-out duration-300">
          Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
