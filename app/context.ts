import { FormEvent, createContext } from "react";

type TContext = {
  formValue: string | null;
  setFormValue: (val: string) => void;
  handleSubmit: (e: FormEvent) => void;
  setResponse: () => string;
  bearer: string | null;
  setBearer: (val: string) => void;
  clear: boolean;
  handleClear: () => void;
  sourceLanguage?: string | null;
  setSourceLanguage: (language: string | null) => void;
  destinationLanguage?: string | null;
  setDestinationLanguage: (language: string | null) => void;
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
});
