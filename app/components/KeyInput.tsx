import { useContext } from "react";
import { FormContext } from "../context";

const KeyInput = () => {
  const { bearer, setBearer, obfuscate, setObfuscate } = useContext(FormContext);

  return (
    <div className="flex items-center justify-center mb-4 w-2/5">
      <label htmlFor="bearerInput" className="mr-1">
        OpenAI Key:
      </label>
      <div className="flex border-dark border rounded-md p-1 flex-1">
        <input
          id="bearerInput"
          type={obfuscate ? "password" : "text"}
          className="bg-black p-1 flex-1"
          onChange={(e) => setBearer(e.target.value)}
          value={bearer}
        ></input>
        <button onClick={() => setObfuscate(!obfuscate)} className="py-1 px-2 bg-slate-700">
          {obfuscate ? "Show" : "Hide"}
        </button>
      </div>
    </div>
  );
};

export default KeyInput;
