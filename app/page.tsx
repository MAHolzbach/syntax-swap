import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 font-code">
      <h1 className="text-7xl mb-12 text-center">Syntax Swap</h1>
      <p className="mb-1">
        This simple app allows you to input code from several different languages and get it &quot;translated&quot; via
        openAI&apos;s API.
      </p>
      <hr className="bg-white w-full my-4" />
      <p className="mb-4">
        You will need a dedicated API key from openAI. Please see the &quot;Account Setup&quot; section of the OpenAI
        documentation on how to get a free{" "}
        <a href="https://platform.openai.com/docs/quickstart/account-setup" target="_blank" className="text-sky-600">
          API key.
        </a>
      </p>
      <Form />
    </main>
  );
}
