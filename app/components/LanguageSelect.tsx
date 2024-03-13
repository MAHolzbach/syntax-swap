"use client";

import { useState } from "react";

type TLanguageSelectProps = {
  setSourceLanguage: (language: string | null) => void;
  sourceLanguage: string | null;
};

const LanguageSelect = ({
  setSourceLanguage,
  sourceLanguage,
}: TLanguageSelectProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const languages = [
    "Unknown",
    "Javascript",
    "Java",
    "Golang",
    "Python",
    "C",
    "C++",
    "C#",
    "PHP",
    "Rust",
  ];

  return (
    <div className="w-full mr-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggleMenu(!toggleMenu);
        }}
        className="bg-dark border-dark border rounded-md inline-flex items-center justify-center py-1 px-7 text-center text-base font-medium text-white hover:bg-slate-500 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 w-full"
      >
        {sourceLanguage ?? "Select Source Language"}
      </button>
      <ul
        className={`${
          toggleMenu ? "visible" : "hidden"
        } bg-dark border-dark border rounded-md mt-2`}
      >
        {languages.map((language) => {
          return (
            <li
              key={language}
              onClick={() => {
                setSourceLanguage(language);
                setToggleMenu(!toggleMenu);
              }}
              className="p-2 hover:cursor-pointer hover:bg-slate-500"
            >
              {language}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSelect;
