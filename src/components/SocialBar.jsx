import React from "react";
import { info } from "../data/info";

const SocialBar = () => {
  const { socialData } = info();
  const style =
    "my-6 mx-4 hover:-translate-y-1 hover:ease-in-out hover:duration-300 ease-in-out duration-300 hover:text-font";
  return (
    <ul className="text-dark border-black dark:text-white dark:bg-main border dark:border-white rounded">
      {socialData.map((social) => {
        return (
          <li key={social.tag} className={style}>
            <a href={social.link} target="_blank" className="text-lg">
              {social.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialBar;
