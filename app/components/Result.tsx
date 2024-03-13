type TResultProps = { response: string };

const Result = ({ response }: TResultProps) => {
  return (
    <div className="my-12 w-full lg:w-5/12">
      <label
        htmlFor="outputCode"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Output:
      </label>
      <textarea
        value={response}
        id="outputCode"
        rows={20}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:resize-y"
        readOnly
      ></textarea>
    </div>
  );
};

export default Result;
