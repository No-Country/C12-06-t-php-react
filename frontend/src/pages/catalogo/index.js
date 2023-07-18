import Filtered from "@/components/Filterss/Filtered";
import Layout from "@/components/Layout";
import ContentContact from "@/components/contact/ContentContact";
import React, { useEffect, useState } from "react";

const Catalogo = ({ products }) => {
  const [dataFiltered, setDataFiltered] = useState("");
  const [resFilter, setResFilter] = useState([]);

  const cardsCatalogue = products.slice(0, 12)
  console.log(cardsCatalogue);

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
      <header className="w-full flex flex-col items-center justify-center text-center gap-4 px-2 md:px-8">
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
      <section className="w-full flex flex-col items-center justify-center my-8">
      {resFilter.length > 0 ? <>
      </> : <article>

      </article>
      
    }
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
