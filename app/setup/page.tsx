import NextImage from "next/image";

export default async function PagePage() {
  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">Meu setup</h1>
      test:
     


      <div className="flex justify-center">
        <NextImage
          className="rounded-full"
          src="/damoclesgil.jpg"
          width="180"
          height="180"
          alt="Dâmocles Gil Marçal"
          title="Dâmocles Gil"
        />
      </div>
      - [ ] Computador - [ ] Worspace - Ferramentas. Configurações
    </article>
  );
}
