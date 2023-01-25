import React, { useState, useEffect } from "react";
import Burguer from "./Burguer";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize]);

  return (
    <nav className="flex justify-between p-4">
      <div>ian</div>
      <Burguer isMobileValue={isMobile} />
    </nav>
  );
};

export default Navbar;
Navbar;
