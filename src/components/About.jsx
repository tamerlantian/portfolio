import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";

const About = ({ t }) => {
  return (
    <section className="mx-auto">
      <h3 className="text-2xl dark:text-slate-200 font-semibold text-black">
        {t("about.about-me")}
      </h3>
      <div className="mt-10 text-slate-700 dark:text-slate-400">
        <div>
          <p>{t("about.description-2")}</p>
          <br />
          <p>{t("about.description-3")}</p>
          <br />
          <p>{t("about.description-4")}</p>
        </div>
        <div className="mt-16">
          <Link
            to="/pdf"
            className="rounded-sm bg-gray-600 text-white py-3 px-5"
          >
            {t("about.download-cv")}
            <AiOutlineCloudDownload className="inline text-xl ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
