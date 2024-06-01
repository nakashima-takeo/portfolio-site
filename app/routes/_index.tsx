import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" bg-red-600 pt-10 items-center text-center">
      <h1 className="underline font-bold">Welcome!</h1>
      <h1 className="underline font-bold">Welcome!</h1>
    </div>
  );
}
