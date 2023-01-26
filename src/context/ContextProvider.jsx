import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isMobile, setIsMobile] = useState(false);

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
        setIsMobile
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
