import NextImage from "next/image";
import { itemsSetup } from "./itemsSetup";

export default async function PagePage() {
  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="text-center mb-2"> Setup 🖥️</h1>
      <div className="flex justify-center mb-6">
        <NextImage
          src="/setup.jpg"
          width="1920"
          height="1080"
          alt="Setup Dâmocles Gil"
          title="Setup Dâmocles Gil"
        />
      </div>
      <div className="grid grid-cols-2 gap-10 text-center pb-10">
        {itemsSetup.map((setup, index) => (
          <a
            key={index}
            href={setup.link}
            className="border border-gray-300 rounded pt-2 hover:bg-gray-100 dark:hover:bg-gray-800 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture className="rounded-sm p-4 m-0">
              <img
                className="mb-1 bg-white h-auto w-full rounded-md rounded-b-none object-contain aspect-video"
                src={setup.img}
                alt={setup.alt}
              />
              <strong className="block font-bold text-lg mt-4"> {setup.name} </strong>
            </picture>
          </a>
        ))}
      </div>
    </article>
  );
}
