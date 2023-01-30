import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const SocialBar = () => {
  const style = "mb-6";
  return (
    <ul className="text-dark border-black bg-gray-200 dark:text-white dark:bg-slate-700 border dark:border-white px-5 py-8 rounded-md">
      <li className={style}>
        <a className="hover:text-font" href="">
          <FiTwitter className="text-lg" />
        </a>
      </li>
      <li className={style}>
        <a className="hover:text-font" href="">
          <FiLinkedin className="text-lg" />
        </a>
      </li>
      <li className={style}>
        <a className="hover:text-font" href="">
          <FiGithub className="text-lg" />
        </a>
      </li>
      <li>
        <a className="hover:text-font" href="">
          <FiInstagram className="text-lg" />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
