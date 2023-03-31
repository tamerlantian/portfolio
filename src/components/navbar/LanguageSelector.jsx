import React, { useState } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [t,i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (val) => {
    i18n.changeLanguage(val);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center gap-2 text-xl mr-5">
      <button className="dark:text-white" onClick={() => setIsOpen(!isOpen)}>
        <IoLanguageSharp />
      </button>
      {isOpen && (
        <div className="absolute text-sm shadow-xl bg-white top-8 right-1 py-4 px-4 rounded-lg dark:text-white dark:bg-modal">
          <div>
            <button
              className="px-8 hover:text-font "
              onClick={() => handleClick("en")}
            >
              English
            </button>
            <button
              className="mt-2 px-8 hover:text-font"
              onClick={() => handleClick("es")}
            >
              Spanish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
