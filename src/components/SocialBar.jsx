import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const SocialBar = () => {
  const style = "mb-6";
  return (
    <ul className="text-white bg-slate-700 dark:text-black dark:bg-gray-200 border dark:border-black px-5 py-8 rounded-md">
      <li className={style}>
        <a className="hover:text-font" href="">
          <FiTwitter className="text-xl" />
        </a>
      </li>
      <li className={style}>
        <a className="hover:text-font" href="">
          <FiLinkedin className="text-xl" />
        </a>
      </li>
      <li className={style}>
        <a className="hover:text-font" href="">
          <FiGithub className="text-xl" />
        </a>
      </li>
      <li>
        <a className="hover:text-font" href="">
          <FiInstagram className="text-xl" />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
