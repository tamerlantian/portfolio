import React, { useEffect, useRef } from "react";

const RightNav = ({ onClose, open, isMobileValue }) => {
  const rightBar = useRef();

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
  
  const mobile = `bg-cyan-100 h-screen fixed top-0 right-0 pt-14 shadow-xl rightbar ${open ? "translate-x-0" : "translate-x-full"}` ;

  const desktop = `flex items-center`; 

  const linkClass = `pl-10`;

  return (
    <ul
      ref={rightBar}
      className={isMobileValue ? mobile : desktop}
    >
      <li className={linkClass}>About</li>
      <li className={linkClass}>Projects</li>
      <li className={linkClass}>Resume</li>
      <li className={linkClass}>Contact</li>
    </ul>
  );
};

export default RightNav;
