"use client";

import OpenAI from "openai";
import { useState } from "react";

export default function Form() {
  const [formValue, setFormValue] = useState("");

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  }
  return (
    <form id="inputForm" className="my-12 w-full lg:w-5/12">
      <div className="flex">
        <label
          htmlFor="inputCode"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Enter code here:
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
      <textarea
        onChange={(e) => setFormValue(e.target.value)}
        id="message"
        rows={20}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:resize-y"
        placeholder="Paste code here..."
      ></textarea>
    </form>
  );
}
