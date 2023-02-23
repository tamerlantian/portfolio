import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const SocialBar = () => {
  const style = "my-6 mx-4 hover:-translate-y-1 hover:ease-in-out hover:duration-300 ease-in-out duration-300 hover:text-font";
  return (
    <ul className="text-dark border-black bg-gray-200 dark:text-white dark:bg-slate-700 border dark:border-white rounded">
      <li className={style}>
        <a href="">
          <FiTwitter className="text-lg" />
        </a>
      </li>
      <li className={style}>
        <a href="">
          <FiLinkedin className="text-lg" />
        </a>
      </li>
      <li className={style}>
        <a href="">
          <FiGithub className="text-lg" />
        </a>
      </li>
      <li className={style}>
        <a href="">
          <FiInstagram className="text-lg" />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
