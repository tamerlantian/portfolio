import React from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";

const ButtonTheme = ({ mobile }) => {
  const { toggleTheme, handleToggleTheme, open, setOpen, isMobile } =
    useStateContext();

  // this style switches the button when user is on a mobile device
  const style = `rounded-full bg-gray-300  ${
    mobile ? "w-11/12 mt-5 p-4" : "p-2 ml-10"
  } dark:bg-slate-700`;

  const handleClick = () => {
    if (isMobile) {
      setOpen(!open);
    }
    handleToggleTheme();
  };

  return (
    <button onClick={handleClick} className={style}>
      {toggleTheme ? (
        <BiMoon className="inline text-xl dark:text-black" />
      ) : (
        <BsSun className="inline text-xl dark:text-slate-200" />
      )}

      {mobile && (
        <span className="dark:text-slate-200 ml-3">
          Change to {toggleTheme ? "dark" : "light"} theme
        </span>
      )}
    </button>
  );
};

export default ButtonTheme;
