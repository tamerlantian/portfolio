import React from "react";
import { socialData } from "../data/info";

const Footer = () => {
  return (
    <footer className="py-10">
      <div>
        <ul className="flex justify-evenly max-w-xs p-4 mx-auto text-xl xl:hidden dark:text-white">
          {socialData.map((social) => {
            return (
              <li key={social.tag}>
                <a href={social.link} className="hover:text-font">{social.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
