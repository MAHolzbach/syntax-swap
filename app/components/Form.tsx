"use client";

import { FormEvent, useState } from "react";

import useSWRMutation from "swr/mutation";

import { FormContext } from "../context";

import Result from "./Result";
import Submit from "./Submit";

//TODO: Add personality picker
//TODO: Add copy text button to output field
//TODO: Add api key input field
//TODO: Add logic to get/set api key to local storage
//? Does openai have an auth widget that could be used instead?

const Form = () => {
  const [formValue, setFormValue] = useState("");
  const [clear, setClear] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState<string | null>(null);
  const [destinationLanguage, setDestinationLanguage] = useState<string | null>(
    null
  );
  const [personality, setPersonality] = useState();

  const query = {
    messages: [
      {
        role: "system",
        content:
          "You are a helpful senior software developer. Begin the response with the code. Put all comments at the end.",
      },
      {
        role: "user",
        content: `Translate this ${sourceLanguage} code into ${destinationLanguage}: ${formValue}`,
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
    if (clear) return "";

    if (isMutating) return "Converting...";

    if (error)
      return "There was error. Please ensure you have credits on your openai API key.";

    if (data) return data.choices[0].message.content;

    return "";
  };

  const context = {
    formValue,
    setFormValue,
    handleSubmit,
    setResponse,
    handleClear,
    clear,
    setClear,
    sourceLanguage,
    setSourceLanguage,
    destinationLanguage,
    setDestinationLanguage,
    personality,
    setPersonality,
  };

  return (
    <FormContext.Provider value={context}>
      <Submit />
      <Result />
    </FormContext.Provider>
  );
};

export default Form;
