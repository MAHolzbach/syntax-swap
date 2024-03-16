"use client";

import { useContext, useEffect, useRef, useState } from "react";

import { FormContext } from "../context";

type TLanguageSelectProps = {
  type: string;
};

const LanguageSelect = ({ type }: TLanguageSelectProps) => {
  const {
    setSourceLanguage,
    sourceLanguage,
    setDestinationLanguage,
    destinationLanguage,
  } = useContext(FormContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const languages = [
    "Unknown",
    "javascript",
    "java",
    "golang",
    "python",
    "c",
    "c++",
    "csharp",
    "php",
    "rust",
  ];

  const languageDropdown = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const closeLanguageMenus = (e: any) => {
      if (toggleMenu && !languageDropdown.current?.contains(e.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", closeLanguageMenus);
  }, [toggleMenu]);

  const handleLanguageSelect = (language: string) => {
    if (type === "source") setSourceLanguage(language);

    if (type === "destination") setDestinationLanguage(language);

    setToggleMenu(!toggleMenu);
  };

  const selectedLanguageRenderer = () => {
    if (type === "source") {
      return sourceLanguage ?? "Select Source Language";
    }

    if (type === "destination") {
      return destinationLanguage ?? "Select Destination Language";
    }
  };

  return (
    <div className="relative w-full first-of-type:mr-2" ref={languageDropdown}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggleMenu(!toggleMenu);
        }}
        className="bg-black border-dark border rounded-md inline-flex items-center justify-center py-1 px-7 text-center text-base font-medium text-white hover:bg-slate-500 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 w-full"
      >
        {selectedLanguageRenderer()}
      </button>
      <ul
        className={`${
          toggleMenu ? "visible" : "hidden"
        } z-10 absolute bg-black border-dark border rounded-md mt-2 w-full`}
      >
        {languages.map((language) => {
          if (type === "destination" && language === "Unknown") {
            return null;
          } else {
            return (
              <li
                key={language}
                onClick={() => {
                  handleLanguageSelect(language);
                }}
                className="p-2 hover:cursor-pointer hover:bg-slate-500"
              >
                {language}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default LanguageSelect;
