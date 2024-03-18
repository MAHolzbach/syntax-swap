import { useContext } from "react";
import { FormContext } from "../context";

const PersonalitySelect = () => {
  const { setPersonality } = useContext(FormContext);

  const personalities = {
    helpful: "You are a helpful senior software developer.",
    arrogant:
      "You are a very smart senior software developer. You are disdainful of questions from junior developers and consider them a waste of your time. Provide the code translation, but fill it with arrogant or passive aggressive comments about how easy it was. Scold the user for wasting your time.",
  };

  return <input type="radio">PersonalitySelect</input>;
};

export default PersonalitySelect;
