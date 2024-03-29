import React, { useEffect, useRef } from "react";
import { ButtonTheme } from "./";
import { info } from "../data/info";

const RightNav = ({ onClose, open, isMobile }) => {
  const { navbarItems } = info();
  const rightBar = useRef();
  // the code below checks if the user has clicked outside of the menu when mobile phone is on and set the menu off
  useEffect(() => {
    const handler = (event) => {
      const hamburger = document.getElementById("hamburger");
      if (hamburger.contains(event.target)) {
        return;
      }
      if (!rightBar.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // style for opening and closing sidenav
  const mobile = `bg-white text-black z-10 w-72 rounded-xl fixed top-4 right-4 pt-2 pb-5 shadow-xl rightbar dark:text-slate-200 dark:bg-modal ${
    open ? "block" : "hidden"
  }`;
  // style for turning sidenav display flex
  const desktop = `flex items-center text-black dark:text-white`;
  // styles for links with proper positioning
  const linkClass = `hover:text-font ${isMobile ? "pl-5 pt-5" : "pl-10"}`;

  return (
    <ul ref={rightBar} className={isMobile ? mobile : desktop}>
      {navbarItems.map((item) => {
        return (
          <li key={item.name} className={linkClass}>
            <a href={item.link} onClick={onClose}>
              {item.name}
            </a>
          </li>
        );
      })}
      {isMobile ? (
        <li className="text-center">
          <ButtonTheme mobile />
        </li>
      ) : (
        <li>
          <ButtonTheme />
        </li>
      )}
    </ul>
  );
};

export default RightNav;
