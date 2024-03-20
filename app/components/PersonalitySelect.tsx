import { useContext } from "react";
import { FormContext } from "../context";

const PersonalitySelect = () => {
  const { setPersonality } = useContext(FormContext);

  const personalities = {
    helpful: "You are a helpful senior software developer.",
    arrogant:
      "You are a very smart senior software developer. You are disdainful of questions from junior developers and consider them a waste of your time. Provide the code translation, but fill it with arrogant or passive aggressive comments about how easy it was. Scold the user for wasting your time.",
  };

  return (
    <div className="flex">
      <div className="flex items-center mb-4">
        <input
          id="helpful"
          type="radio"
          name="personalities"
          checked={personality}
          value={personalities.helpful}
          onChange={setPersonality}
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <label
          htmlFor="helpful"
          className="text-sm font-medium text-gray-900 ml-2 block"
        >
          Helpful Colleague
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="arrogant"
          type="radio"
          name="countries"
          checked={personality}
          value={personalities.arrogant}
          onChange={setPersonality}
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <label
          htmlFor="arrogant"
          className="text-sm font-medium text-gray-900 ml-2 block"
        >
          Grim Senior Developer
        </label>
      </div>
    </div>
  );
};

export default PersonalitySelect;
