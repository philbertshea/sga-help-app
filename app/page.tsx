'use client';
import Image from "next/image";
import data from "../data.json";

function InfoBlock({ title, links }: { title: string, links: {title: string, url: string, image?: string}[] }) {
  return (
    <div className="flex flex-col place-items-center">
        <h2 className="font-bold text-lg text-center">{title}</h2>
        {links.map((link) => (
          <LinkCard key={link.url} href={link.url} {...link} />
        ))}
    </div>
  );
}


function LinkCard({ href, title, image }: {href: string, title: string, image?: string}) {
  return (<a 
    href={href} 
    className="flex items-center p-2 w-full rounded-md scale-90 text-black hover:text-white hover:scale-95 hover:bg-sky-700 transition-all border border-orange-600 bg-sky-300 mb-2">
    <div className="flex m-0 p-0 text-center w-full">
      {image && (
        <Image
          className="rounded-full m-0 p-0"
          alt={title}
          src={image}
          width={40}
          height={40} />
      )}
      <h1 className="font-semibold m-0 p-0 text-2xl w-full text-center">{title}</h1>
    </div>
  </a>);
}

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
    </>
  );
}