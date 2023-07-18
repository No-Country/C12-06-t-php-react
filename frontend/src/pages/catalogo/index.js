import { Card } from "@/components/Card";
import Filtered from "@/components/Filterss/Filtered";
import Layout from "@/components/Layout";
import ContentContact from "@/components/contact/ContentContact";
import React, { useEffect, useState } from "react";

const Catalogo = ({ products }) => {
  const [dataFiltered, setDataFiltered] = useState("");
  const [resFilter, setResFilter] = useState([]);

  const dataCatalogue = products.slice(0, 12);

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
    <Layout page="Catálogo">
      <header className="w-full flex flex-col items-center justify-center text-center gap-4 px-2 md:px-12">
        <h2 className="font-extrabold ">
          Anim aute id magna aliqua{" "}
          <span className="text-OrangeRed">ad ad non sunt.</span>
        </h2>
        <p className="text-DarkGray sm:max-w-[70%] md:max-w-[50%]">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.{" "}
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

      <ContentContact />
    </Layout>
  );
};

export default Catalogo;

export const getServerSideProps = async () => {
  const getProducts = await fetch(`${process.env.API_URL}/products`);
  const products = await getProducts.json();
  return { props: { products } };
};
