"use client";

import { FormEvent, useEffect, useState } from "react";

import useSWRMutation from "swr/mutation";

import { FormContext } from "../context";

import KeyInput from "./KeyInput";
import PersonalitySelect from "./PersonalitySelect";
import Result from "./Result";
import Submit from "./Submit";

//TODO: Add personality picker
//TODO: Extract buttons, etc.

const Form = () => {
  const [formValue, setFormValue] = useState("");
  const [bearer, setBearer] = useState<string>("");
  const [clear, setClear] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState<string | null>(null);
  const [destinationLanguage, setDestinationLanguage] = useState<string | null>(
    null
  );
  const [personality, setPersonality] = useState();
  const [obfuscate, setObfuscate] = useState(false);

  useEffect(() => {
    setBearer(sessionStorage.getItem("bearer-token") ?? "");
  }, []);

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

  const { trigger, data, isMutating } = useSWRMutation(
    "https://api.openai.com/v1/chat/completions",
    fetcher
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setClear(false);

    sessionStorage.setItem("bearer-token", bearer);

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

    if (data?.error) return data.error.message;

    if (data?.choices) {
      return data.choices[0].message.content;
    }

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
    obfuscate,
    setObfuscate,
  };

  return (
    <FormContext.Provider value={context}>
      <KeyInput />
      <PersonalitySelect />
      <div className="flex flex-col lg:flex-row items-start justify-around w-full">
        <Submit />
        <Result />
      </div>
    </FormContext.Provider>
  );
};

export default Form;
