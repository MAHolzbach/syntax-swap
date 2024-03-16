import { FormEvent, createContext } from "react";

type TContext = {
  formValue: string | null;
  setFormValue: (val: string) => void;
  setResponse: () => "";
  handleClear: () => void;
  handleSubmit: (e: FormEvent) => void;
  setSourceLanguage: (language: string | null) => void;
  sourceLanguage?: string | null;
  setDestinationLanguage: (language: string | null) => void;
  destinationLanguage?: string | null;
};

export const FormContext = createContext<TContext>({
  formValue: "",
  setResponse: () => "",
  handleClear: () => {},
  setFormValue: () => {},
  handleSubmit: () => {},
  setSourceLanguage: () => {},
  sourceLanguage: "",
  setDestinationLanguage: () => {},
  destinationLanguage: "",
});
