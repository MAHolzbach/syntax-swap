import { useContext } from "react";
import LanguageSelect from "./LanguageSelect";

import { FormContext } from "../context";

const Submit = () => {
  const {
    formValue,
    setFormValue,
    bearer,
    handleSubmit,
    sourceLanguage,
    destinationLanguage,
  } = useContext(FormContext);

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
          className="block mb-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white lg:resize-y"
          placeholder="Enter/Paste code here..."
        ></textarea>
        <div className="flex w-full justify-between mb-4">
          <LanguageSelect type="source" />
          <LanguageSelect type="destination" />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={
            sourceLanguage === null ||
            destinationLanguage === null ||
            !formValue ||
            !bearer
          }
          className="bg-black border-dark border rounded-md self-start py-1 px-7 text-center text-base font-medium text-white hover:bg-slate-500 disabled:border-slate-700 disabled:text-slate-700 disabled:hover:bg-black w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Submit;
