import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16  font-code">
      <h1 className="text-7xl mb-12 text-center">Syntax Swap</h1>
      <div className="flex flex-col lg:flex-row items-center justify-around w-full">
        <Form />
        <div className="my-12 w-full lg:w-5/12">
          <label
            htmlFor="outputCode"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Output:
          </label>
          <textarea
            id="outputCode"
            rows={20}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:resize-y"
            readOnly
          ></textarea>
        </div>
      </div>
    </main>
  );
}
