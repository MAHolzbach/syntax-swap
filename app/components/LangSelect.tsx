"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useContext, useState } from "react";

import { FormContext } from "../context";

type TLanguageSelectProps = {
  type: string;
};

const LangSelect = ({ type }: TLanguageSelectProps) => {
  const { setSourceLanguage, sourceLanguage, setDestinationLanguage, destinationLanguage } = useContext(FormContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const languages = ["Unknown", "javascript", "java", "golang", "python", "c", "c++", "csharp", "php", "rust"];

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
    <DropdownMenu>
      <DropdownMenuTrigger>{selectedLanguageRenderer()}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSelect;
