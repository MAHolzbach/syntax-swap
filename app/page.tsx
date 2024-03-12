import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16  font-code">
      <h1 className="text-7xl mb-12 text-center">Syntax Swap</h1>
      <div className="flex flex-col lg:flex-row items-start justify-around w-full">
        <Form />
      </div>
    </main>
  );
}
