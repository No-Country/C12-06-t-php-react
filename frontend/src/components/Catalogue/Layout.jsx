import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../shared/footer/Footer";
import ContentContact from "../contact/ContentContact";
import Filtered from "../Filterss/Filtered";
import { Inter } from "next/font/google";
import { Card } from "../Card";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ page, textBlack, textOrangeRed, data }) => {
  const [dataFiltered, setDataFiltered] = useState("");
  const [resFilter, setResFilter] = useState([]);

  const dataCatalogue = data.slice(0, 12);

  useEffect(() => {
    const getDataFilter = async (filter) => {
      const getData = await fetch(
        `${process.env.API_URL}/products?brand=${filter}`
      );
      const products = await getData.json();
      setResFilter(products);
    };
    dataFiltered.length > 0 && getDataFilter(dataFiltered);
  }, [dataFiltered]);

  return (
    <>
      <Head>
        <title>Wheel offers - {page}</title>
        <link rel="icon" href="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="author"
          content="Exequiel Maydana, Valentina Molina, Fernanda Aguilar, Guillermo Zevallos"
        />
        <meta
          name="description"
          content="Descubre nuestro concesionario de autos exclusivo. En Wheel Offers, ofrecemos una amplia gama de vehículos de alta calidad para satisfacer tus necesidades y preferencias. Nuestra selección incluye autos nuevos y usados de marcas reconocidas, con opciones que se adaptan a todos los estilos de vida y presupuestos. Confía en nosotros para encontrar el auto de tus sueños y disfrutar de una experiencia de compra excepcional. Visítanos hoy mismo y déjanos ayudarte a encontrar el vehículo perfecto para ti"
        />
        <meta
          name="keywords"
          content="Concesionario de autos, Venta de autos, Autos nuevos, Autos usados, Marcas reconocidas, Experiencia de compra, Presupuesto, Estilos de vida"
        />
      </Head>
      <NavBar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <header className="w-full flex flex-col items-center justify-center text-center gap-4 px-2 md:px-12">
          <h2 className="font-extrabold sm:text-xl md:text-2xl">
            {textBlack} <span className="text-OrangeRed">{textOrangeRed}</span>
          </h2>
          <p className="text-DarkGray sm:max-w-[70%] md:max-w-[50%]">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.{" "}
          </p>
          <Filtered setDataFiltered={setDataFiltered} />
        </header>
        <section className="w-full flex flex-col items-center justify-center my-8 px-2 md:px-12">
          {resFilter.length > 0 ? (
            <>
              <article className="w-full pb-8 grid grid-cols-1 place-items-center gap-8 overflow-x-hidden sm:grid-cols-2 sm:px-2 lg:grid-cols-3">
                {resFilter.map((data) => (
                  <Card key={data.id} data={data} />
                ))}
              </article>
            </>
          ) : (
            <article className="w-full pb-8 grid grid-cols-1 place-items-center gap-8 overflow-x-hidden sm:grid-cols-2 sm:px-2 lg:grid-cols-3">
              {dataCatalogue.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </article>
          )}
          <article className="w-full flex items-center justify-end">
            <div className="w-auto m-0 border border-DarkGray rounded-md">
              <button className="px-2 border-r border-DarkGray text-xl font-semibold ">
                &lt;
              </button>
              <button className="px-2 border-l border-DarkGray text-xl font-semibold ">
                &gt;
              </button>
            </div>
          </article>
        </section>
      </main>
      <ContentContact />
      <Footer />
    </>
  );
};

export default Layout;
