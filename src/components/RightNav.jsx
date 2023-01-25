import React, { useEffect, useRef } from "react";
import { BiMoon } from "react-icons/bi";

const RightNav = ({ onClose, open, isMobileValue }) => {
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
  const mobile = `bg-white h-screen fixed top-0 right-0 pt-14 shadow-xl rightbar ${
    open ? "translate-x-0 w-60" : "translate-x-full w-0"
  }`;
  // style for turning sidenav display flex
  const desktop = `flex items-center`;
  // styles for links with proper positioning
  const linkClass = `${isMobileValue ? "pl-10 pt-5" : "pl-10"}`;

  return (
    <ul ref={rightBar} className={isMobileValue ? mobile : desktop}>
      <li className={linkClass}>About</li>
      <li className={linkClass}>Projects</li>
      <li className={linkClass}>Resume</li>
      <li className={linkClass}>Contact</li>
      <li className={linkClass}>
        <BiMoon className="inline text-xl" />
      </li>
    </ul>
  );
};

export default RightNav;
