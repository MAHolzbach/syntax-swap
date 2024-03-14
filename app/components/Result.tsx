type TResultProps = {
  response: string;
  clear: boolean;
  handleClear: () => void;
};

const Result = ({ response, clear, handleClear }: TResultProps) => {
  return (
    <div className="my-12 w-full lg:w-5/12">
      <label
        htmlFor="outputCode"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Output:
      </label>
      <textarea
        value={clear ? "" : response}
        id="outputCode"
        rows={20}
        className="block mb-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-gray-300 lg:resize-y"
        readOnly
      ></textarea>
      <button
        onClick={() => handleClear()}
        className="bg-black border-dark border rounded-md inline-flex items-center justify-center py-1 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
      >
        Clear
      </button>
    </div>
  );
};

export default Result;
