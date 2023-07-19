import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="w-full min-h-screen items-center justify-center">
      <article className="flex flex-col items-center justify-center gap-2 mt-12">
        <h1 className="font-bold text-xl">404 - Página no encontrada</h1>
        <figure className="w-[300px]">
          <Image
            width={100}
            height={100}
            src="/img404.svg"
            alt="imagen error 404"
            className="w-full h-full object-cover"
          />
        </figure>
        <Link href="/" className="font-bold text-RoyalBlue">
          Volver al Inicio
        </Link>
      </article>
    </section>
  );
}
