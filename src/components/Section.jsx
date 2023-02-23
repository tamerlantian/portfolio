import React from "react";
import { SectionTitle } from "./";
import PortfolioImage from "../assets/portfolio.png";
import { TbWorld } from "react-icons/tb";
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
      <div className="md:px-16 xl:px-28 gap-8 mt-16">
        {hobbies.map((hobbie) => {
          return (
            <div
              key={hobbies.title}
              className="flex flex-col md:flex-row shadow-xl mt-4  dark:bg-modal p-4"
            >
              <div className="bg-black h-20 badges mb-5 flex items-center justify-center">
                <div>
                  <img
                    className="mx-auto w-[20rem]"
                    src={hobbie.image}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-slate-200">
                  {hobbie.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-alt pt-3">
                  {hobbie.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
