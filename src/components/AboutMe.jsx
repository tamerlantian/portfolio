import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle, About, Skills } from ".";

const AboutMe = () => {
  const [t] = useTranslation("global");
  return (
    <section id="about" className="about">
      <SectionTitle title={t("about.about-me")} />
      <div>
        <p className="text-slate-700 dark:text-slate-400 mx-auto max-w-4xl mt-6 text-center">
          {t("about.description-1")}
        </p>
      </div>
      <div className="grid md:grid-cols-2  md:px-16 xl:px-28 gap-8 mt-16">
        <About t={t} />
        <Skills t={t} />
      </div>
    </section>
  );
};

export default AboutMe;
