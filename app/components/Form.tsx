"use client";

import { FormEvent, useState } from "react";

import useSWRMutation from "swr/mutation";

import Result from "./Result";
import Submit from "./Submit";

//TODO: Add language select dropdown
//TODO: Add clear all button
//TODO: Add api key input field
//TODO: Add logic to get/set api key to local storage
//? Does openai have an auth widget that could be used instead?

const Form = () => {
  const [formValue, setFormValue] = useState("");
  const [clear, setClear] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState<string | null>(null);
  const [resultLanguage, setResultLanguage] = useState(null);

  const query = {
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Translate this ${sourceLanguage} code into Python: ${formValue}`,
      },
    ],
    model: "gpt-3.5-turbo",
  };

  const fetcher = async (url: string) =>
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    }).then((resp) => {
      return resp.json();
    });

  const { trigger, data, isMutating, error } = useSWRMutation(
    "https://api.openai.com/v1/chat/completions",
    fetcher
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setClear(false);

    try {
      trigger();
    } catch (err) {
      console.error(err);
    }
  }

  const handleClear = () => {
    setClear(true);
  };

  const setResponse = () => {
    if (isMutating) return "Converting...";

    if (error)
      return "There was error. Please ensure you have credits on your openai API key.";

    if (data) return data.choices[0].message.content;

    if (clear) return "";

    return "";
  };

  return (
    <>
      <Submit
        setFormValue={setFormValue}
        handleSubmit={handleSubmit}
        setSourceLanguage={setSourceLanguage}
        sourceLanguage={sourceLanguage}
      />
      <Result
        response={setResponse()}
        clear={clear}
        handleClear={handleClear}
      />
    </>
  );
};

export default Form;
