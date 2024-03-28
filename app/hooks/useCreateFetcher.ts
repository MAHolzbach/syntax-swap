import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import { TActivePersonality } from "../context";

type TUseCreateFetcherArgs = {
  formValue: string | null;
  sourceLanguage: string | null;
  destinationLanguage: string | null;
  activePersonality: TActivePersonality;
};

const useCreateFetcher = ({
  formValue,
  sourceLanguage,
  destinationLanguage,
  activePersonality,
}: TUseCreateFetcherArgs) => {
  const [bearer, setBearer] = useState<string>("");

  useEffect(() => {
    setBearer(sessionStorage.getItem("bearer-token") ?? "");
  }, []);

  const query = {
    messages: [
      {
        role: "system",
        content: `${activePersonality.content} Begin the response with the code. Put all comments at the end.`,
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

  const { trigger, data, isMutating } = useSWRMutation("https://api.openai.com/v1/chat/completions", fetcher);

  return { trigger, data, isMutating, bearer, setBearer };
};

export default useCreateFetcher;
