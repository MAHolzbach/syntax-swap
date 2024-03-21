import { FormEvent, createContext } from "react";

type TActivePersonality = {
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
  sourceLanguage?: string | null;
  setSourceLanguage: (language: string | null) => void;
  destinationLanguage?: string | null;
  setDestinationLanguage: (language: string | null) => void;
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
  sourceLanguage: "",
  setSourceLanguage: () => "",
  destinationLanguage: "",
  setDestinationLanguage: () => "",
  activePersonality: { type: "", content: "", text: "" },
  setActivePersonality: () => "",
  obfuscate: false,
  setObfuscate: () => false,
});
