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

import { useContext, useEffect, useState } from "react";

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

import { Button } from "@/components/ui/button";
import { FormContext } from "../context";

const Result = () => {
  const { setResponse, handleClear, outputLanguage } = useContext(FormContext);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const response = setResponse().replace(/`{3}/gm, "");

  const formatted = hljs.highlight(response, {
    language: outputLanguage || "plaintext",
  }).value;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="my-12 w-full lg:w-5/12">
      <label htmlFor="outputCode" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
        Output:
      </label>
      <pre
        id="outputCode"
        className={`block mb-4 p-2.5 w-full min-h-[422px] focus:min-h-min text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-gray-300 lg:resize-y !whitespace-pre overflow-x-auto language-${outputLanguage}`}
        dangerouslySetInnerHTML={{
          __html: formatted,
        }}
      ></pre>
      <div className="flex flex-col w-full mb-4 gap-2 sm:flex-row">
        <Button
          variant="outline"
          onClick={() => handleClear()}
          disabled={!formatted}
          className="text-base min-w-40 hover:bg-slate-500 disabled:border-slate-700 disabled:text-slate-700 disabled:hover:bg-black"
        >
          Clear
        </Button>
        <Button
          variant="outline"
          onClick={() => handleCopy()}
          disabled={!formatted}
          className="text-base min-w-40 hover:bg-slate-500 disabled:border-slate-700 disabled:text-slate-700 disabled:hover:bg-black"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default Result;
