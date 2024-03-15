import hljs from "highlight.js/lib/core";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import golang from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import plaintext from "highlight.js/lib/languages/plaintext";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";

import { useEffect } from "react";

hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("golang", golang);
hljs.registerLanguage("python", python);
hljs.registerLanguage("c", c);
hljs.registerLanguage("c++", cpp);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("php", php);
hljs.registerLanguage("rust", rust);

import "highlight.js/styles/github-dark.css";

type TResultProps = {
  response: string;
  handleClear: () => void;
  destinationLanguage: string | null;
};

const Result = ({
  response,
  handleClear,
  destinationLanguage,
}: TResultProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  let formatted = hljs.highlight(response.replace(/`{3}/gm, ""), {
    language: destinationLanguage || "plaintext",
  }).value;

  return (
    <div className="my-12 w-full lg:w-5/12">
      <label
        htmlFor="outputCode"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Output:
      </label>
      <pre id="outputCode">
        <code
          className={`block mb-4 p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-gray-300 lg:resize-y !whitespace-pre overflow-x-auto language-${destinationLanguage}`}
          dangerouslySetInnerHTML={{
            __html: formatted,
          }}
        ></code>
      </pre>
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
