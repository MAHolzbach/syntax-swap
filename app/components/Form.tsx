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

  const query = {
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Translate this code into Python: ${formValue}`,
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
    }).then((r) => {
      return r.json();
    });

  const { trigger, data, error } = useSWRMutation(
    "https://api.openai.com/v1/chat/completions",
    fetcher
  );

  if (error) console.error(error);

  // if (isLoading) setResponse("Standby...");

  if (data) {
    console.log(data);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    trigger();
  }

  return (
    <>
      <Submit setFormValue={setFormValue} handleSubmit={handleSubmit} />
      <Result response={data ? data.choices[0].message.content : ""} />
    </>
  );
};

export default Form;
