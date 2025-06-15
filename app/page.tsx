'use client';
import data from "../data.json";
import {InfoBlock} from "@/app/utils/helpers";

export default function Home() {
  return (
    <>
      <div className="flex place-items-center flex-col mx-auto w-full justify-center mt-6 p-2">
        <h1 className="font-bold mt-4 text-5xl">Hello, {data.name}.</h1>
        <h2 className="text-xl mt-3 pl-5 sm:pl-56 pr-5 sm:pr-56">{data.description}</h2>
        {data.schemes.map((scheme) => (
          <InfoBlock title={scheme.title} links={scheme.links} />
        ))}
      </div>
      <footer className="flex place-items-center flex-col mx-auto w-full justify-center mt-6 p-2">
          <p>Prototype developed by Philbert Shea. Links may be inaccurate, check first.</p>
          <a href="https://github.com/philbertshea/sga-help-app"><u>Github Repo</u></a>
      </footer>
    </>
  );
}