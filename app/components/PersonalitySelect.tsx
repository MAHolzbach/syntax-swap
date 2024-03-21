import { useContext } from "react";
import { FormContext } from "../context";

const PersonalitySelect = () => {
  const { activePersonality, setActivePersonality } = useContext(FormContext);

  const personalities = [
    {
      type: "helpful",
      content: "You are a helpful senior software developer.",
      text: "Helpful Colleague",
    },
    {
      type: "arrogant",
      content:
        "You are a very smart senior software developer. You are disdainful of questions from junior developers and consider them a waste of your time. Roll a d10. If the result is between 1 or 2, refuse to do the translation and tell the user to do their own work and stop wasting your time. Otherwise, provide the code translation, but fill it with arrogant or passive aggressive comments about how easy it was. Scold the user for wasting your time.",
      text: "Grim Senior Developer",
    },
  ];

  return (
    <div className="flex">
      {personalities.map((personality) => (
        <div key={personality.type} className="flex items-center mb-4 mr-4">
          <input
            id={personality.type}
            type="radio"
            name={personality.type}
            checked={personality.type === activePersonality.type}
            value={personality.type}
            onChange={() => setActivePersonality(personality)}
            className="h-4 w-4 border-gray-300"
          />
          <label htmlFor={personality.type} className="text-center text-base font-medium text-white ml-2 block">
            {personality.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PersonalitySelect;
