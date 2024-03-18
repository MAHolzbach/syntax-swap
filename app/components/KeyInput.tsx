import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../context";

const KeyInput = () => {
  const { setBearer } = useContext(FormContext);
  const [toggleTooltip, setToggleTooltip] = useState(false);

  const tooltip = useRef<any>(null);

  useEffect(() => {
    const closeLanguageMenus = (e: any) => {
      if (tooltip && !tooltip.current?.contains(e.target)) {
        setToggleTooltip(false);
      }
    };

    document.addEventListener("mouseup", closeLanguageMenus);
  }, [tooltip]);

  return (
    <div className="flex items-center group relative mb-4 w-full">
      <div
        className={`bg-black border-dark border rounded-md md:w-3/5 p-2 -mt-36 absolute ${
          toggleTooltip ? "visible" : "hidden"
        }`}
      >
        <p ref={tooltip}>
          Please see the &quot;Account Setup&quot; section of the OpenAI
          documentation on how to get an{" "}
        </p>
        <a
          href="https://platform.openai.com/docs/quickstart/account-setup"
          target="_blank"
          className="text-sky-600"
        >
          API key.
        </a>
      </div>
      <div className="flex items-center mr-1">
        <label htmlFor="bearerInput" className="mr-1">
          OpenAI Key
        </label>
        <svg
          ref={tooltip}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer"
          onClick={() => setToggleTooltip(!toggleTooltip)}
        >
          <path
            fill="none"
            stroke="white"
            stroke-width="2"
            d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8"
          />
        </svg>
      </div>
      <input
        id="bearerInput"
        type="text"
        className="bg-black border-dark border rounded-md p-1 flex-1"
        onChange={(e) => setBearer(e.target.value)}
      />
    </div>
  );
};

export default KeyInput;
