import { useState } from "react";

const PersonalitySelect = () => {
  const helpfulPersonality = "You are a helpful senior software developer.";
  const arrogantPersonality =
    "You are a very smart senior software developer. You are disdainful of questions from junior developers and consider them a waste of your time. Provide the code translation, but fill it with arrogant or passive aggressive comments about how easy it was. Scold the user for wasting your time.";
  const [personality, setPersonality] = useState(helpfulPersonality);

  return <div>PersonalitySelect</div>;
};

export default PersonalitySelect;
