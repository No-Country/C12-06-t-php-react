import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SubMenuCatalogue from "./SubMenuCatalogue";
import SubMenuSalesPoints from "./SubMenuSalesPoints";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCatalogue, setOpenCatalogue] = useState(false);
  const [openSalePoint, setOpenSalePoint] = useState(false);

  return (
    <header className="w-full flex flex-col items-center p-4">
      <div className="w-full flex items-center justify-between">
        <figure className="w-[60px] s:w-[80px] md:ml-8">
          <Link href="/">
            <Image
              width={300}
              height={100}
              src="/logo.svg"
              alt="logo"
              className=""
            />
          </Link>
        </figure>
        <div className="md:hidden">
          <i
            className="bx bx-menu text-2xl cursor-pointer s:text-3xl"
            onClick={() => setOpenMenu(!openMenu)}
          ></i>
        </div>
        <nav
          className={
            openMenu
              ? "fixed top-0 left-0 w-full min-h-screen flex flex-col gap-4 bg-White z-10 p-4"
              : "hidden md:flex w-[90%] items-center justify-between"
          }
        >
          <div className="w-full flex items-center justify-between md:hidden">
            <figure className="w-[60px] s:w-[80px]">
              <Image
                width={300}
                height={100}
                src="/logo.svg"
                alt="logo"
                className=""
              />
            </figure>
            <i
              className="bx bx-x text-2xl cursor-pointer text-SlateGray s:text-3xl"
              onClick={() => setOpenMenu(!openMenu)}
            ></i>
          </div>
          <ul className="w-full flex flex-col items-start gap-4 pt-4 border-t border-SlateGray text-SlateGray font-medium s:text-lg md:flex-row md:border-none md:text-base md:pt-0 md:items-center md:ml-8 md:gap-8">
            <li className="flex flex-col">
              <Link
                href="#"
                className="flex items-center gap-2 "
                onClick={() => setOpenCatalogue(!openCatalogue)}
              >
                Catálogo de autos{" "}
                <i className="bx bx-chevron-down text-xl s:text-2xl"></i>
              </Link>
              <div className="flex md:hidden">
                {openCatalogue && <SubMenuCatalogue />}
              </div>{" "}
            </li>
            <li className="flex flex-col">
              <Link
                href="#"
                className="flex items-center gap-2"
                onClick={() => setOpenSalePoint(!openSalePoint)}
              >
                Puntos de venta{" "}
                <i className="bx bx-chevron-down text-xl s:text-2xl"></i>
              </Link>
              <div className="flex md:hidden">
                {openSalePoint && <SubMenuSalesPoints />}
              </div>
            </li>
            <li>
              <Link href="/vendermiauto" className="flex items-center gap-2">
                Vender mi auto
              </Link>
            </li>
            <li>
              <Link href="/financiacion" className="flex items-center gap-2">
                Financiación
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="flex items-center gap-2">
                Nosotros
              </Link>
            </li>
          </ul>
          <Link href="/contacto" className="mt-8 md:mt-0 md:mr-8">
            <button className="w-32 py-2 px-2 bg-OrangeRed text-White rounded-md">
              Contáctanos
            </button>
          </Link>
        </nav>
      </div>
      <div className="hidden md:flex">
        {openCatalogue && <SubMenuCatalogue />}
        {openSalePoint && <SubMenuSalesPoints />}
      </div>
    </header>
  );
};

export default NavBar;
