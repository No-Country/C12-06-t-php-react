import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SubMenuCatalogue = () => {
  const router = useRouter();

  return (
    <article className="w-full flex flex-col md:gap-4 md:px-12 md:pt-4">
      <ul className="w-full h-[250px] flex flex-col gap-4 overflow-y-scroll scrollVisible md:flex-row md:h-auto">
        <li className="flex flex-col gap-1">
          <div
            className="w-[40px] py-2 flex items-center justify-center text-center rounded-md bg-OrangeRed text-White text-xl cursor-pointer"
            onClick={() => router.push("/catalogo/nuevos")}
          >
            <i className="bx bxs-car-garage"></i>
          </div>
          <span
            className="font-semibold text-black cursor-pointer"
            onClick={() => router.push("/catalogo/nuevos")}
          >
            Nuevos
          </span>
          <p className="text-SlateGray text-xs">
            Get a better understanding of where your traffic is coming from.
          </p>
          <span
            className="text-OrangeRed cursor-pointer flex items-center"
            onClick={() => router.push("/catalogo/nuevos")}
          >
            Saber más
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </li>
        <li className="flex flex-col gap-1">
          <div
            className="w-[40px] py-2 flex items-center justify-center text-center rounded-md bg-OrangeRed text-White text-xl cursor-pointer"
            onClick={() => router.push("/catalogo/usados")}
          >
            <i className="bx bxs-car-garage"></i>
          </div>
          <span
            className="font-semibold text-black cursor-pointer"
            onClick={() => router.push("/catalogo/usados")}
          >
            Usados
          </span>
          <p className="text-SlateGray text-xs">
            Get a better understanding of where your traffic is coming from.
          </p>
          <span
            className="text-OrangeRed cursor-pointer flex items-center"
            onClick={() => router.push("/catalogo/usados")}
          >
            Saber más
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </li>
        <li className="flex flex-col gap-1">
          <div
            className="w-[40px] py-2 flex items-center justify-center text-center rounded-md bg-OrangeRed text-White text-xl cursor-pointer"
            onClick={() => router.push("/catalogo/ofertas")}
          >
            <i className="bx bx-check-shield"></i>
          </div>
          <span
            className="font-semibold text-black cursor-pointer"
            onClick={() => router.push("/catalogo/ofertas")}
          >
            Oferta
          </span>
          <p className="text-SlateGray text-xs">
            Get a better understanding of where your traffic is coming from.
          </p>
          <span
            className="text-OrangeRed cursor-pointer flex items-center"
            onClick={() => router.push("/catalogo/ofertas")}
          >
            Saber más
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </li>
        <li className="flex flex-col gap-1">
          <div
            className="w-[40px] py-2 flex items-center justify-center text-center rounded-md bg-OrangeRed text-White text-xl cursor-pointer"
            onClick={() => router.push("/catalogo/marcas")}
          >
            <i className="bx bx-border-all"></i>
          </div>
          <span
            className="font-semibold text-black cursor-pointer"
            onClick={() => router.push("/catalogo/marcas")}
          >
            Marcas
          </span>
          <p className="text-SlateGray text-xs">
            Get a better understanding of where your traffic is coming from.
          </p>
          <span
            className="text-OrangeRed cursor-pointer flex items-center"
            onClick={() => router.push("/catalogo/marcas")}
          >
            Saber más
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </li>
      </ul>
      <div className="w-full flex items-center justify-start gap-4 p-2 mt-4 md:mt-0 md:p-0">
        <Link href="/catalogo" className="flex items-center gap-2 text-xs">
          <i className="bx bx-check-circle text-lg"></i>{" "}
          <p className="font-semibold">Ver catálogo completo</p>
        </Link>
        <Link href="/contacto" className="flex items-center gap-2 text-xs">
          <i className="bx bx-phone text-lg"></i>
          <p className="font-semibold">Contáctanos</p>
        </Link>
      </div>
    </article>
  );
};

export default SubMenuCatalogue;
