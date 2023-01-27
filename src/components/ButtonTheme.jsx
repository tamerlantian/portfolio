import React from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";

const ButtonTheme = ({ mobile }) => {
  const { toggleTheme, handleToggleTheme } = useStateContext();

  // this style switches the button when user is on a mobile device 
  const style = `rounded-full bg-slate-700 ${
    mobile ? "w-11/12 mt-5 p-4" : "p-2 ml-10"
  } dark:bg-gray-300`;

  return (
    <button onClick={handleToggleTheme} className={style}>
      {toggleTheme ? (
        <BiMoon className="inline text-xl dark:text-black" />
      ) : (
        <BsSun className="inline text-xl dark:text-black" />
      )}

      {mobile && <span className="dark:text-black ml-3">Change to light theme</span>}
    </button>
  );
};

export default ButtonTheme;
