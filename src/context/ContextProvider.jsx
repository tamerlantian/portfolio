import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isMobile, setIsMobile] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(true);

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
  }

  return (
    <StateContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        open,
        setOpen,
        screenSize,
        setScreenSize,
        isMobile,
        setIsMobile,
        toggleTheme,
        handleToggleTheme
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
