import Image from "next/image";

export function InfoBlock({ title, links }: { title: string, links: {title: string, url: string, image?: string}[] }) {
  return (
    <div className="flex flex-col place-items-center">
        <h2 className="font-bold text-lg text-center">{title}</h2>
        {links.map((link) => (
          <LinkCard key={link.url} href={link.url} {...link} />
        ))}
    </div>
  );
}

export function LinkCard({ href, title, image }: {href: string, title: string, image?: string}) {
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
