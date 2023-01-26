import React, { useEffect, useRef } from "react";
import { BiMoon } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

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
  const mobile = `bg-modal text-white z-10 w-72 rounded-xl fixed top-4 right-4 pt-2 pb-5 shadow-xl rightbar ${
    open ? "block" : "hidden"
  }`;
  // style for turning sidenav display flex
  const desktop = `flex items-center text-white`;
  // styles for links with proper positioning
  const linkClass = `${isMobileValue ? "pl-5 pt-5" : "pl-10"}`;

  return (
    <ul ref={rightBar} className={isMobileValue ? mobile : desktop}>
      <li className={linkClass}>About</li>
      <li className={linkClass}>Projects</li>
      <li className={linkClass}>Resume</li>
      <li className={linkClass}>Contact</li>
      {isMobileValue ? (
        <li className="rounded-full w-11/12 m-auto mt-5 p-4 bg-main">
          <button>
            <BiMoon className="inline text-xl mr-3" />
            <span>Change to light theme</span>
          </button>
        </li>
      ) : (
        <li>
          <button className="border rounded-full p-2 ml-10">
            <BiMoon className="inline text-xl " />
          </button>
        </li>
      )}
    </ul>
  );
};

export default RightNav;
