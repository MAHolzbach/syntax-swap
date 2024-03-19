import { useContext } from "react";
import { FormContext } from "../context";

const KeyInput = () => {
  const { bearer, setBearer, storeToken, setStoreToken } =
    useContext(FormContext);

  return (
    <div className="flex flex-col">
      <div className="flex items-center group relative mb-4 w-full">
        <label htmlFor="bearerInput" className="mr-1">
          OpenAI Key:
        </label>
        <input
          id="bearerInput"
          type="text"
          className="bg-black border-dark border rounded-md p-1 flex-1"
          onChange={(e) => setBearer(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="localStorage" className="mr-1">
          Save key to browser local storage (optional):
        </label>
        <input
          onChange={() => setStoreToken(!storeToken)}
          disabled={!bearer}
          type="checkbox"
          name="localStorage"
          id="localStorage"
          className="bg-grey-50 border-white ring-white accent-black focus:ring-3 h-5 w-5 rounded"
        />
      </div>
    </div>
  );
};

export default KeyInput;
