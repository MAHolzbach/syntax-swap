import { FormEvent, createContext } from "react";

export type TActivePersonality = {
  type: string;
  content: string;
  text: string;
};

type TContext = {
  formValue: string | null;
  setFormValue: (val: string) => void;
  handleSubmit: (e: FormEvent) => void;
  setResponse: () => string;
  bearer: string;
  setBearer: (val: string) => void;
  clear: boolean;
  handleClear: () => void;
  inputLanguage?: string | null;
  setInputLanguage: (language: string | null) => void;
  outputLanguage?: string | null;
  setOutputLanguage: (language: string | null) => void;
  activePersonality: TActivePersonality;
  setActivePersonality: (activePersonality: TActivePersonality) => void;
  obfuscate: boolean;
  setObfuscate: (val: boolean) => void;
};

export const FormContext = createContext<TContext>({
  formValue: "",
  setFormValue: () => "",
  handleSubmit: () => {},
  setResponse: () => "",
  bearer: "",
  setBearer: () => null,
  clear: false,
  handleClear: () => {},
  inputLanguage: "",
  setInputLanguage: () => "",
  outputLanguage: "",
  setOutputLanguage: () => "",
  activePersonality: { type: "", content: "", text: "" },
  setActivePersonality: () => "",
  obfuscate: false,
  setObfuscate: () => false,
});
