import data from "@/data.json";
import {InfoBlock} from "@/app/utils/helpers";

export default async function HomeWithName({ params }: {params: Promise<{ name: string; schemes?: string[] }>}) {
    const { name, schemes } = await params;
    let processedName: string = name;
    const schemesList = schemes ?? [];

    if (name.startsWith("mr")) {
        processedName = "Mr. " + name.charAt(2).toUpperCase() + name.substring(3);
    } else if (name.startsWith("ms")) {
        processedName = "Ms. " + name.charAt(2).toUpperCase() + name.substring(3);
    } else if (name.startsWith("mdm")) {
        processedName = "Mdm. " + name.charAt(3).toUpperCase() + name.substring(4);
    }

    return (
        <>
        <div className="flex place-items-center flex-col mx-auto w-full justify-center mt-6 p-2">
            <h1 className="font-bold mt-4 text-5xl">Hello, {processedName}.</h1>
            <h2 className="text-xl mt-3 pl-5 sm:pl-56 pr-5 sm:pr-56">{data.description}</h2>
            <br/>
            <h2 className="text-xl mt-3 pl-5 sm:pl-56 pr-5 sm:pr-56">Your SGA recommended you these:</h2>
            {data.schemes.filter(scheme => schemesList.includes(scheme.tag)).map((scheme) => (
            <InfoBlock title={scheme.title} links={scheme.links} />
            ))}
            <br />
            <h2 className="text-xl mt-3 pl-5 sm:pl-56 pr-5 sm:pr-56">Here are our other schemes:</h2>
            {data.schemes.filter(scheme => !schemesList.includes(scheme.tag)).map((scheme) => (
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