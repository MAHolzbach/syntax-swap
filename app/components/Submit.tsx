import { FormEvent } from "react";
import LanguageSelect from "./LanguageSelect";

type TSubmitProps = {
  setFormValue: (val: string) => void;
  handleSubmit: (e: FormEvent) => void;
  setSourceLanguage: (language: string | null) => void;
  sourceLanguage: string | null;
};

const Submit = ({
  setFormValue,
  handleSubmit,
  setSourceLanguage,
  sourceLanguage,
}: TSubmitProps) => {
  return (
    <form id="inputForm" className="my-12 w-full lg:w-5/12">
      <label
        htmlFor="inputCode"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Enter/Paste code:
      </label>
      <div className="flex flex-col items-start">
        <textarea
          onChange={(e) => setFormValue(e.target.value)}
          id="message"
          rows={20}
          className="block mb-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:resize-y"
          placeholder="Enter/Paste code here..."
        ></textarea>
        <div className="flex w-full">
          <LanguageSelect
            sourceLanguage={sourceLanguage}
            setSourceLanguage={setSourceLanguage}
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-dark border-dark border rounded-md self-start py-1 px-7 text-center text-base font-medium text-white hover:bg-slate-500 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Submit;
