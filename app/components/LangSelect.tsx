"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useContext, useState } from "react";

import { FormContext } from "../context";

type TLanguageSelectProps = {
  type: string;
};

const LangSelect = ({ type }: TLanguageSelectProps) => {
  const { setInputLanguage, inputLanguage, setOutputLanguage, outputLanguage } = useContext(FormContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const languages = ["Unknown", "javascript", "java", "golang", "python", "c", "c++", "csharp", "php", "rust"];

  const handleLanguageSelect = (language: string) => {
    if (type === "input") setInputLanguage(language);

    if (type === "output") setOutputLanguage(language);

    setToggleMenu(!toggleMenu);
  };

  const selectedLanguageRenderer = () => {
    if (type === "input") {
      return inputLanguage ?? "Select Input Language";
    }

    if (type === "output") {
      return outputLanguage ?? "Select Output Language";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-md flex items-center justify-center py-1 text-center hover:bg-slate-500 w-full">
        {selectedLanguageRenderer()}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => {
          if (type === "destination" && language === "Unknown") {
            return null;
          } else {
            return (
              <DropdownMenuItem
                key={language}
                onClick={() => {
                  handleLanguageSelect(language);
                }}
                className="p-2 hover:cursor-pointer hover:bg-slate-500"
              >
                {language}
              </DropdownMenuItem>
            );
          }
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSelect;
