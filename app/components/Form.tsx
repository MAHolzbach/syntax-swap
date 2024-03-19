"use client";

import { FormEvent, useState } from "react";

import useSWRMutation from "swr/mutation";

import { FormContext } from "../context";

import KeyInput from "./KeyInput";
import Result from "./Result";
import Submit from "./Submit";

//TODO: Add personality picker
//TODO: Add copy text button to output field

const Form = () => {
  const [formValue, setFormValue] = useState("");
  const [bearer, setBearer] = useState<string | null>(
    //! sessionStorage is undefined here due to SSR.
    JSON.parse(sessionStorage.getItem("bearer-token") ?? "") || ""
  );
  const [clear, setClear] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState<string | null>(null);
  const [destinationLanguage, setDestinationLanguage] = useState<string | null>(
    null
  );
  const [personality, setPersonality] = useState();
  const [storeToken, setStoreToken] = useState(false);

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
        Authorization: `Bearer ${bearer}`,
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

    if (storeToken)
      sessionStorage.setItem("bearer-token", JSON.stringify(bearer));

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
    bearer,
    setBearer,
    handleClear,
    clear,
    setClear,
    sourceLanguage,
    setSourceLanguage,
    destinationLanguage,
    setDestinationLanguage,
    personality,
    setPersonality,
    storeToken,
    setStoreToken,
  };

  return (
    <FormContext.Provider value={context}>
      <div>
        <KeyInput />
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-around w-full">
        <Submit />
        <Result />
      </div>
    </FormContext.Provider>
  );
};

export default Form;
