import React, { useState, useEffect } from "react";
import Burguer from "./Burguer";
import logo from "../assets/logo.png";
import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
  const { isMobile, setIsMobile } = useStateContext();
  const { screenSize, setScreenSize } = useStateContext();

  // this effect helps us to check when the user resizes the screen and save the value
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // tells if user is on mobile or desktop
  useEffect(() => {
    if (screenSize < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize]);

  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <div>
        <img className="w-12" src={logo} alt="" />
      </div>
      <Burguer isMobileValue={isMobile} />
    </nav>
  );
};

export default Navbar;
Navbar;
